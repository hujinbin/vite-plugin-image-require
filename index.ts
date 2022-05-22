
export function imageRequirePlugin(){
    return {
        name:'vite-plugin-image-require',
        async transform(code:any,path:any) {
            if(code === '' && path.indexOf('.js') >-1){
                return {
                    code: 'export default {}',
                } 
            }
            code = code.replace(/require\(.*?\)/img, (content:any) => {
                let result = content;
                if(content.match(/\.(jpeg|jpg|gif|png|bmp|webp|svg)/g)){ // 检测到require的是图片
                    let regex = /('|")(.+?)('|")/g;
                    const urlArr = content.match(regex)
                    const url = urlArr[0]
                    result = `new URL(${url}, import.meta.url).href`;
                }
                return result
            })
            return {
                code,
            }
        }
    }
}