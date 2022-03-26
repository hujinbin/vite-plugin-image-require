
export function imageRequirePlugin(){
    return {
        name:'vite-plugin-image-require',
        async transform(code:any) {
            code = code.replace(/require\(.*?\)/img, (content:any) => {
                let result = content;
                if(content.match(/\.(jpeg|jpg|gif|png|bmp|webp|svg)/g)){ // 检测到require的是图片
                    let regex = /('|")(.+?)('|")/g;
                    const urlArr = content.match(regex)
                    result = urlArr[0];
                }
                return result;
            })
            return {
                code,
            }
        }
    }
}