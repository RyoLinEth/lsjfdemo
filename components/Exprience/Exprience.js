import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle'
import swal from 'sweetalert'

const Expriences = [
    {
        date: '專屬邀請連結',
        logo: 'images/work/1.png',
        position: 'Junior Visual Designer',
        companyName: 'Trapeza Group, USA.',
        workFrom: '',
    },
    // {
    //     date: '2017 - 2018',
    //     logo: 'images/work/2.png',
    //     position: 'UI/UX Designer',
    //     companyName: 'Gallerie Ontario, Canada',
    //     workFrom: '(Remote)',
    // },
    // {
    //     date: '2019 - 2020',
    //     logo: 'images/work/3.png',
    //     position: 'Seinor UI/UX Desinger',
    //     companyName: 'Morson Hybrid, Canada',
    //     workFrom: '',
    // },
    // {
    //     date: '2019 - Present',
    //     logo: 'images/work/4.png',
    //     position: 'Product Designer',
    //     companyName: 'Myant Inc. Etobicoke, ON',
    //     workFrom: '(Remote)',
    // },
]


const ExprienceSec = (props) => {

    // const defaultInviteLink = window.location.origin;
    const defaultInviteLink = "尚未連接錢包";
    const [inviteLink, setInviteLink] = useState(defaultInviteLink);

    const generateLink = (value) => {
        let tempLink = window.location.origin + "/?inviter=" + value;
        setInviteLink(tempLink);
    }

    const copyLink = () => {
        if (inviteLink === defaultInviteLink) {
            swal("錯誤", "尚未連結錢包", "error")
            return;
        }
        navigator.clipboard.writeText(inviteLink).then(() => {
            swal("成功", `已成功複製連結 ${inviteLink}`, "success")
        }, (err) => {
            swal("異常", "複製失敗", "error")
        })
    }

    useEffect(() => {
        if (props.defaultAccount !== null) {
            generateLink(props.defaultAccount);
        }
    }, [props.defaultAccount])

    return (
        <div className="wpo-work-area section-padding" id="experience">
            <div className="container">
                <SectionTitle Title={'我的邀請連結'} />
                <div className="wpo-work-wrap">
                    {Expriences.map((exprience, exp) => (
                        <div className="wpo-work-item" key={exp}>
                            <ul>
                                <li className="date">{exprience.date}</li>
                                {/* <li className="logo"><img src={exprience.logo} alt="" /></li> */}
                                {/* <li className="position">{exprience.position} <span>{exprience.companyName} <span>{exprience.workFrom}</span></span></li> */}
                                <li style={{ wordWrap: 'break-word', maxWidth: '80vw' }}>{inviteLink}</li>
                                <li className="link" onClick={copyLink}>
                                    <a>複製連結</a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shape-wk">
                <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default ExprienceSec;