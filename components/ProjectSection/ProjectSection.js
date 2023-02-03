import React, { useState, useEffect } from 'react';
import ProjectSingle from '../ProjectSingle/ProjectSingle';
import swal from 'sweetalert'


const ProjectSection = (props) => {

    const [isClaimActive, setIsClaimActive] = useState(true);
    const [isJoined, setIsJoined] = useState(false);

    useEffect(() => {
        const getContractValue = async () => {
            if (props.contract === null) return;

            let tempClaimActive = await props.contract.isClaimActive();
            console.log("The claim is active? " + tempClaimActive)
            setIsClaimActive(tempClaimActive);

            let tempJoin = await props.contract.isAddressJoined(props.defaultAccount);
            console.log("The address has joined? " + tempJoin)
            setIsJoined(tempJoin);


            console.log(`
            isClaimActive : ${tempClaimActive}
            isJoined : ${tempJoin}
            `
            )
        }
        getContractValue()
    }, [props.defaultAccount, props.contract])

    const handleClaim = () => {
        if (!isClaimActive) {
            swal("錯誤", "未開放提幣", "error")
            return;
        }

        if (!isJoined) {
            swal("錯誤", "您並未參加IDO", "error")
        }
        swal("成功", "已成功提幣", "success")
        return;
    }

    return (
        <div className="wpo-project-area section-padding" id='portfolio'>
            <div className="container">
                <div className="wpo-section-title-s2">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-12">
                            <div className="title">
                                <h2>提幣</h2>
                                <p>點擊按鈕即可領幣</p>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-2">
                            <div className="sec-title-icon" onClick={handleClaim}>
                                <i className="fi flaticon-self-growth"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;