# Aliyun OSS Deployment Script (PowerShell Version)
# Author: Trae AI

$ErrorActionPreference = "Stop"

# Set TLS 1.2 to prevent download failures
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

# Configuration
$OSSUTIL_URL = "https://gosspublic.alicdn.com/ossutil/1.7.16/ossutil64.zip"
$OSSUTIL_EXE = "ossutil64.exe"
$DIST_DIR = "dist"

Write-Host "========================================" -ForegroundColor Green
Write-Host "  English Learning Site Deployment Script" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# 1. Check and install ossutil
if (-not (Get-Command "ossutil" -ErrorAction SilentlyContinue) -and -not (Test-Path ".\$OSSUTIL_EXE")) {
    Write-Host "Downloading ossutil..." -ForegroundColor Yellow
    Invoke-WebRequest -Uri $OSSUTIL_URL -OutFile "ossutil64.zip"
    Expand-Archive -Path "ossutil64.zip" -DestinationPath "." -Force
    
    # Move extracted file to current directory
    $extractedItem = Get-ChildItem -Path "." -Filter "ossutil64.exe" -Recurse | Select-Object -First 1
    if ($extractedItem) {
        Move-Item -Path $extractedItem.FullName -Destination "." -Force
    }
    Remove-Item "ossutil64.zip" -Force
    # Clean up empty folders
    Get-ChildItem -Path "." -Directory | Where-Object { (Get-ChildItem $_.FullName).Count -eq 0 } | Remove-Item -Force
    
    Write-Host "ossutil installation completed." -ForegroundColor Green
}

$OSS_CMD = if (Get-Command "ossutil" -ErrorAction SilentlyContinue) { "ossutil" } else { ".\$OSSUTIL_EXE" }

# 2. Configure Aliyun Credentials
# Check if configured
& $OSS_CMD ls | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Aliyun AccessKey configuration required." -ForegroundColor Yellow
    Write-Host "Please get AccessKey from https://ram.console.aliyun.com/manage/ak"
    
    $endpoint = Read-Host "Enter Endpoint (e.g., oss-cn-hangzhou.aliyuncs.com)"
    $accessKeyID = Read-Host "Enter AccessKey ID"
    $accessKeySecret = Read-Host "Enter AccessKey Secret"
    
    & $OSS_CMD config -e $endpoint -i $accessKeyID -k $accessKeySecret
}

# 3. Get Bucket Name
$defaultBucket = "jacky-english-study-site"
$bucketName = Read-Host "Enter Bucket Name (Default: $defaultBucket)"
if ([string]::IsNullOrWhiteSpace($bucketName)) {
    $bucketName = $defaultBucket
}
Write-Host "Using Bucket: $bucketName" -ForegroundColor Cyan

# 4. Check/Create Bucket
Write-Host "Checking bucket..." -ForegroundColor Yellow
& $OSS_CMD ls "oss://$bucketName" 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Bucket does not exist, creating..." -ForegroundColor Yellow
    & $OSS_CMD mb "oss://$bucketName"
    
    # Set public read permission
    & $OSS_CMD set-acl "oss://$bucketName" public-read
    
    # Configure static website
    & $OSS_CMD website "oss://$bucketName" --index index.html --error 404.html
    
    Write-Host "Bucket created successfully." -ForegroundColor Green
} else {
    Write-Host "Bucket already exists." -ForegroundColor Green
}

# 5. Build Project
Write-Host "Building project..." -ForegroundColor Yellow
# Check dependencies
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
}

npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Please check error messages." -ForegroundColor Red
    exit 1
}

Write-Host "Build completed." -ForegroundColor Green

# 6. Upload to OSS
Write-Host "Uploading to Aliyun OSS..." -ForegroundColor Yellow
& $OSS_CMD cp -r "$DIST_DIR" "oss://$bucketName/" --update --force

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  Deployment Successful!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "Please verify your site in Aliyun OSS Console or access via bound domain."
    Write-Host "Bucket: $bucketName"
} else {
    Write-Host "Deployment failed. Please check error messages." -ForegroundColor Red
    exit 1
}
