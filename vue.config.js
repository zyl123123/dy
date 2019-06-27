module.exports={
    devServer: {
        proxy:{
        '/api':{
            target: "https://douban.uieee.com",
            changeOrigin:true,
            pathRewrite:{
                '^/api':''
            }
        }
       }
    }
}