const path = require('node:path');
const uuid = require('uuid').v4;
const AWS_S3 = require('aws-sdk/clients/s3');
const { S3_REGION, AWS_SECRET_KEY, AWS_ACCESS_KEY, S3_BUCKET } = require('../configs/variables');

const S3 = new AWS_S3({
    region: S3_REGION,
    secretAccessKey: AWS_SECRET_KEY,
    accessKeyId: AWS_ACCESS_KEY,
    apiVersion: 'latest',
    signatureVersion: 'v4'
});

function uploadFileToS3(file, itemId, itemType){
    const Key = fileNameBuilder(file, itemId, itemType);

    return S3.upload({
        Bucket: S3_BUCKET,
        Body: file.data,
        Key,
        ACL: 'public-read',
        ContentType: file.mimetype
    }).promise();         // is always required
}

function fileNameBuilder(file, itemId, itemType){
    const extension = path.extname(file.name); // .jpg

    return `${itemType}/${itemId}/${uuid()}${extension}`;
}

module.exports = {
    uploadFileToS3
}