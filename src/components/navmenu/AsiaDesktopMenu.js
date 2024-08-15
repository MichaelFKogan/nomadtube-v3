import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/navbar.css"

function AsiaDesktopMenu({mobileMenu, closeMobileMenu, toggleAsiaMenu, asiaMenu, closeCountryMenus, back, closeAllMenus, className, dnone}) {

  
    return (
    <>        
        <div className={`mobile-menu desktop-menu asia-menu ${asiaMenu ? 'd-flex' : 'd-none' } ${className}`} style={{paddingTop: "0px"}}>

            <div className="inner-menu">
            <div className="w-55">
                <div className={`nav-menu d-flex align-center mobile`} onClick={() => {closeCountryMenus(); back();}} style={{marginLeft: "0px"}}>
                    Back
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right mobile"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
                </div>
                <hr className={`w-80 mobile`} style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/thailand"} className="nav-menu" onClick={closeAllMenus}><div>🇹🇭 Thailand</div></Link>
                <Link to={"/asia/thailand/bangkok"} className="nav-menu" onClick={closeAllMenus}><div>🛺 Bangkok</div></Link>
                <Link to={"/asia/thailand/chiangmai"} className="nav-menu" onClick={closeAllMenus}><div>🐘 Chiang Mai</div></Link>
                <Link to={"/asia/thailand/kophangan"} className="nav-menu" onClick={closeAllMenus}><div>🏝 Ko Phangan</div></Link>
                <Link to={"/asia/thailand/kosamui"} className="nav-menu" onClick={closeAllMenus}><div>🌊 Ko Samui</div></Link>
                <Link to={"/asia/thailand/phuket"} className="nav-menu" onClick={closeAllMenus}><div>🏖 Phuket</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/vietnam"} className="nav-menu" onClick={closeAllMenus}><div>🇻🇳 Vietnam</div></Link>
                <Link to={"/asia/vietnam/hanoi"} className="nav-menu" onClick={closeAllMenus}><div>🍲 Hanoi</div></Link>
                <Link to={"/asia/vietnam/hochiminhcity"} className="nav-menu" onClick={closeAllMenus}><div>🛵 Ho Chi Minh City</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/taiwan"} className="nav-menu" onClick={closeAllMenus}><div>🇹🇼 Taiwan</div></Link>
                <Link to={"/asia/taipei"} className="nav-menu" onClick={closeAllMenus}><div>🥢 Taipei</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/hongkong"} className="nav-menu" onClick={closeAllMenus}><div>🇭🇰 Hong Kong</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/singapore"} className="nav-menu" onClick={closeAllMenus}><div>🇸🇬 Singapore</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/malaysia"} className="nav-menu" onClick={closeAllMenus}><div>🇲🇾 Malaysia</div></Link>
                <Link to={"/asia/malaysia/kualalumpur"} className="nav-menu" onClick={closeAllMenus}><div>🏙️ Kuala Lumpur</div></Link>
                <Link to={"/asia/malaysia/borneo"} className="nav-menu" onClick={closeAllMenus}><div>🦧 Borneo</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/thephilippines"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇭 The Philippines</div></Link>
                <Link to={"/asia/laos"} className="nav-menu" onClick={closeAllMenus}><div>🇱🇦 Laos</div></Link>
                <Link to={"/asia/cambodia"} className="nav-menu" onClick={closeAllMenus}><div>🇰🇭 Cambodia</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/nepal"} className="nav-menu" onClick={closeAllMenus}><div>🇳🇵 Nepal</div></Link>
                <Link to={"/asia/bhutan"} className="nav-menu" onClick={closeAllMenus}><div>🇧🇹 Bhutan</div></Link>
                <Link to={"/asia/mongolia"} className="nav-menu" onClick={closeAllMenus}><div>🇲🇳 Mongolia</div></Link>
            </div>

            <div className="w-45">
                <Link to={"/asia/bali"} className="nav-menu" onClick={closeAllMenus}><div>🏝 Bali</div></Link>
                <Link to={"/asia/bali/canggu"} className="nav-menu" onClick={closeAllMenus}><div>🏄‍♀️ Canggu</div></Link>
                <Link to={"/asia/bali/ubud"} className="nav-menu" onClick={closeAllMenus}><div>🐒 Ubud</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/japan"} className="nav-menu" onClick={closeAllMenus}><div>🇯🇵 Japan</div></Link>
                <Link to={"/asia/japan/tokyo"} className="nav-menu" onClick={closeAllMenus}><div>🗼 Tokyo</div></Link>
                <Link to={"/asia/japan/osaka"} className="nav-menu" onClick={closeAllMenus}><div>🏯 Osaka</div></Link>
                <Link to={"/asia/japan/kyoto"} className="nav-menu" onClick={closeAllMenus}><div>🎋 Kyoto</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/korea"} className="nav-menu" onClick={closeAllMenus}><div>🇰🇷 Korea</div></Link>
                <Link to={"/asia/korea/seoul"} className="nav-menu" onClick={closeAllMenus}><div>서울 Seoul</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/china"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇳 China</div></Link>
                <Link to={"/asia/china/beijing"} className="nav-menu" onClick={closeAllMenus}><div>🥟 Beijing</div></Link>
                <Link to={"/asia/china/shanghai"} className="nav-menu" onClick={closeAllMenus}><div>🧧 Shanghai</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/indonesia"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇩 Indonesia</div></Link>
                <Link to={"/asia/indonesia/jakarta"} className="nav-menu" onClick={closeAllMenus}><div>🏙️ Jakarta</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/myanmar"} className="nav-menu" onClick={closeAllMenus}><div>🇲🇲 Myanmar</div></Link>
                <Link to={"/asia/myanmar/yangon"} className="nav-menu" onClick={closeAllMenus}><div>ရန်ကုန် Yangon</div></Link>
                <Link to={"/asia/myanmar/bagan"} className="nav-menu" onClick={closeAllMenus}><div>🛕 Bagan</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/bangladesh"} className="nav-menu" onClick={closeAllMenus}><div>🇧🇩 Bangladesh</div></Link>
                <Link to={"/asia/srilanka"} className="nav-menu" onClick={closeAllMenus}><div>🇱🇰 Sri Lanka</div></Link>
                <Link to={"/asia/india"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇳 India</div></Link>
                <div style={{height: "500px"}}></div>
            </div>
            </div>
        </div>
    </>
    );
};

export default AsiaDesktopMenu;