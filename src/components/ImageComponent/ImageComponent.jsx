import './ImageComponent.scss';

export default function ImageComponent(props) {

    const imagePaths = []
    for (var i = 0; i < props.numImages; i++ ) {
    imagePaths.push(`${props.path}${i}${props.ext}`)
    } 

    console.log(imagePaths)
    // // Return many img tags
    // return imgArray.map(function(each){
    //     return(<img src={each.src} alt={each.alt} height="100" />)
    // })

    return (
        <ul>
            {imagePaths.map((imgPath) => {
            return <img src={imgPath} alt="" height="100" />
            })}
        </ul>
    )

}
