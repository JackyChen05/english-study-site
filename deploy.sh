#!/bin/bash
# 英语学习网站部署脚本 - 阿里云OSS

# 配置（请修改为你的配置）
BUCKET_NAME="english-study-site"
REGION="oss-cn-hangzhou"
ENDPOINT="${REGION}.aliyuncs.com"

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  英语学习网站部署脚本${NC}"
echo -e "${GREEN}========================================${NC}"
echo ""

# 1. 检查是否安装ossutil
if ! command -v ossutil &> /dev/null; then
    echo -e "${YELLOW}正在安装 ossutil...${NC}"

    # 检测操作系统
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        wget -q http://gosspublic.alicdn.com/ossutil/1.7.15/ossutil64
        chmod 755 ossutil64
        sudo mv ossutil64 /usr/local/bin/ossutil
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        wget -q http://gosspublic.alicdn.com/ossutil/1.7.15/ossutilmac64
        chmod 755 ossutilmac64
        sudo mv ossutilmac64 /usr/local/bin/ossutil
    else
        echo -e "${RED}不支持的操作系统，请手动下载 ossutil${NC}"
        echo "下载地址：http://gosspublic.alicdn.com/ossutil/1.7.15/"
        exit 1
    fi

    echo -e "${GREEN}ossutil 安装完成${NC}"
fi

# 2. 配置阿里云凭证
if [ ! -f ~/.ossutilconfig ]; then
    echo -e "${YELLOW}需要配置阿里云访问凭证${NC}"
    echo -e "请在阿里云控制台获取 AccessKey ID 和 AccessKey Secret"
    echo "https://ram.console.aliyun.com/manage/ak"
    echo ""

    ossutil config -e ${ENDPOINT} -i YOUR_ACCESS_KEY_ID -k YOUR_ACCESS_KEY_SECRET
fi

# 3. 检查Bucket是否存在
echo -e "${YELLOW}检查存储桶...${NC}"
if ! ossutil ls oss://${BUCKET_NAME} &> /dev/null; then
    echo -e "${YELLOW}存储桶不存在，正在创建...${NC}"
    ossutil mb oss://${BUCKET_NAME} -e ${ENDPOINT}

    # 设置公共读权限
    ossutil set-acl oss://${BUCKET_NAME} public-read

    # 配置静态网站
    ossutil website --index index.html --error 404.html oss://${BUCKET_NAME}

    echo -e "${GREEN}存储桶创建完成：http://${BUCKET_NAME}.${ENDPOINT}${NC}"
else
    echo -e "${GREEN}存储桶已存在${NC}"
fi

# 4. 构建项目
echo -e "${YELLOW}正在构建项目...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}构建失败，请检查错误信息${NC}"
    exit 1
fi

echo -e "${GREEN}构建完成${NC}"

# 5. 上传到OSS
echo -e "${YELLOW}正在上传到阿里云OSS...${NC}"
ossutil cp -r ./dist/ oss://${BUCKET_NAME}/ --update --force

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}  部署成功！${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo -e "网站地址：${YELLOW}http://${BUCKET_NAME}.${ENDPOINT}${NC}"
    echo ""
    echo "建议下一步操作："
    echo "1. 配置CDN加速（推荐）"
    echo "2. 绑定自定义域名"
    echo "3. 开启HTTPS"
else
    echo -e "${RED}部署失败，请检查错误信息${NC}"
    exit 1
fi
