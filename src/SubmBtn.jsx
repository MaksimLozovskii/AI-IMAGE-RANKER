import React from 'react'

export const SubmBtn = (props) => {

    return(
        <div className="btnWrapper">
            <button className="btnWrapper_submBtn" onClick = {() => {

                let resultArrInt = [];

                props.currentArrState.forEach((rawImgURL) => {
                    let imgURL = rawImgURL.split('api/')[1]; 
                    resultArrInt.push(imgURL);        
                })

                // Generate URL param string
                let resultURL = "?img1=" + resultArrInt[0] + "&img2=" + resultArrInt[1] + "&img3=" + resultArrInt[2] + "&img4=" + resultArrInt[3] + "&img5=" + resultArrInt[4] + "&top=" + props.topLabel + "&bot=" + props.botLabel + "&sign=" + props.browserSignature
                window.location.replace(`https://imageRankerFront.pythonanywhere.com/api/result${resultURL}`);
            }}>Submit</button>
        </div>
    )
}