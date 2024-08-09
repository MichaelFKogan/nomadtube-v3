import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/navbar.css"

function AsiaMobileMenu({mobileMenu, closeMobileMenu, toggleAsiaMenu, asiaMenu, closeCountryMenus, back, closeAllMenus}) {

  
    return (
    <>        
        <div className={`mobile-menu ${mobileMenu ? 'd-block' : 'd-none'}`}>
            <div className="nav-menu" onClick={() => {closeMobileMenu(); toggleAsiaMenu();}}><div>⛩ Asia</div></div>
            <Link to={"/southamerica"} className="nav-menu" onClick={closeMobileMenu}><div>💃🏻 South America</div></Link>
            <Link to={"/europe"} className="nav-menu" onClick={closeMobileMenu}><div>🇪🇺 Europe</div></Link>
            <Link to={"/middleeast"} className="nav-menu" onClick={closeMobileMenu}><div>🕋 Middle East</div></Link>
        </div>

        <div className={`mobile-menu asia-menu ${asiaMenu ? 'd-flex' : 'd-none'}`}>
            <div className="nav-menu d-flex align-center" onClick={() => {closeCountryMenus(); back();}} style={{marginLeft: "0px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "0px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                Back
            </div>
            <Link to={"/asia/thailand"} className={`nav-menu thailand-img background-img`} onClick={closeAllMenus}><div>🇹🇭 Thailand</div></Link>
            <Link to={"/asia/thailand/bangkok"} className="nav-menu" onClick={closeAllMenus}><div>🛺 Bangkok</div></Link>
            <Link to={"/asia/thailand/chiangmai"} className="nav-menu" onClick={closeAllMenus}><div>🐘 Chiang Mai</div></Link>
            <Link to={"/asia/thailand/kophangan"} className="nav-menu" onClick={closeAllMenus}><div>🏝 Ko Phangan</div></Link>
            <Link to={"/asia/thailand/kosamui"} className="nav-menu" onClick={closeAllMenus}><div>🌊 Ko Samui</div></Link>
            <Link to={"/asia/thailand/phuket"} className="nav-menu" onClick={closeAllMenus}><div>🏖 Phuket</div></Link>

            <Link to={"/asia/bali"} className="nav-menu" onClick={closeAllMenus}><div>🏝 Bali</div></Link>
            <Link to={"/asia/bali/canggu"} className="nav-menu" onClick={closeAllMenus}><div>🏄‍♀️ Canggu</div></Link>
            <Link to={"/asia/bali/ubud"} className="nav-menu" onClick={closeAllMenus}><div>🐒 Ubud</div></Link>

            <Link to={"/asia/japan"} className="nav-menu" onClick={closeAllMenus}><div>🇯🇵 Japan</div></Link>
            <Link to={"/asia/tokyo"} className="nav-menu" onClick={closeAllMenus}><div>🗼 Tokyo</div></Link>
            <Link to={"/asia/osaka"} className="nav-menu" onClick={closeAllMenus}><div>🏯 Osaka</div></Link>
            <Link to={"/asia/kyoto"} className="nav-menu" onClick={closeAllMenus}><div>🎋 Kyoto</div></Link>

            <Link to={"/asia/korea"} className="nav-menu" onClick={closeAllMenus}><div>🇰🇷 Korea</div></Link>
            <Link to={"/asia/korea/seoul"} className="nav-menu" onClick={closeAllMenus}><div>서울 Seoul</div></Link>

            <Link to={"/asia/taiwan"} className="nav-menu" onClick={closeAllMenus}><div>🇹🇼 Taiwan</div></Link>
            <Link to={"/asia/taipei"} className="nav-menu" onClick={closeAllMenus}><div>🥢 Taipei</div></Link>

            <Link to={"/asia/china"} className="nav-menu" onClick={closeAllMenus}><div>🇨🇳 China</div></Link>
            <Link to={"/asia/china/beijing"} className="nav-menu" onClick={closeAllMenus}><div>🥟 Beijing</div></Link>
            <Link to={"/asia/china/shanghai"} className="nav-menu" onClick={closeAllMenus}><div>🧧 Shanghai</div></Link>

            <Link to={"/asia/hongkong"} className="nav-menu" onClick={closeAllMenus}><div>🇭🇰 Hong Kong</div></Link>
            <Link to={"/asia/singapore"} className="nav-menu" onClick={closeAllMenus}><div>🇸🇬 Singapore</div></Link>

            <Link to={"/asia/indonesia"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇩 Indonesia</div></Link>
            <Link to={"/asia/indonesia/jakarta"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇩 Jakarta</div></Link>

            <Link to={"/asia/malaysia"} className="nav-menu" onClick={closeAllMenus}><div>🇲🇾 Malaysia</div></Link>
            <Link to={"/asia/malaysia/kualalumpur"} className="nav-menu" onClick={closeAllMenus}><div>🇲🇾 Kuala Lumpur</div></Link>
            <Link to={"/asia/malaysia/borneo"} className="nav-menu" onClick={closeAllMenus}><div>🦧 Borneo</div></Link>

            <Link to={"/asia/philippines"} className="nav-menu" onClick={closeAllMenus}><div>🇵🇭 The Philippines</div></Link>
            <Link to={"/asia/laos"} className="nav-menu" onClick={closeAllMenus}><div>🇱🇦 Laos</div></Link>
            <Link to={"/asia/cambodia"} className="nav-menu" onClick={closeAllMenus}><div>🇰🇭 Cambodia</div></Link>

            <Link to={"/asia/myanmar"} className="nav-menu" onClick={closeAllMenus}><div>🇲🇲 Myanmar</div></Link>
            <Link to={"/asia/myanmar/yangon"} className="nav-menu" onClick={closeAllMenus}><div>ရန်ကုန် Yangon</div></Link>
            <Link to={"/asia/myanmar/bagan"} className="nav-menu" onClick={closeAllMenus}><div>🛕 Bagan</div></Link>

            <Link to={"/asia/nepal"} className="nav-menu" onClick={closeAllMenus}><div>🇳🇵 Nepal</div></Link>
            <Link to={"/asia/bhutan"} className="nav-menu" onClick={closeAllMenus}><div>🇧🇹 Bhutan</div></Link>
            <Link to={"/asia/mongolia"} className="nav-menu" onClick={closeAllMenus}><div>🇲🇳 Mongolia</div></Link>

            <Link to={"/asia/bangladesh"} className="nav-menu" onClick={closeAllMenus}><div>🇧🇩 Bangladesh</div></Link>
            <Link to={"/asia/srilanka"} className="nav-menu" onClick={closeAllMenus}><div>🇱🇰 Sri Lanka</div></Link>
            <Link to={"/asia/india"} className="nav-menu" onClick={closeAllMenus}><div>🇮🇳 India</div></Link>

        </div>
    </>
    );
};

export default AsiaMobileMenu;