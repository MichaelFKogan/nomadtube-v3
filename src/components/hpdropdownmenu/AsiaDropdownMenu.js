import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/home.css"

function AsiaDropdownMenu({
    asiaDropdownMenu, closeAllDropdownMenus
}) {

  
    return (
    <>        
        <div className={`asia-dropdown-menu ${asiaDropdownMenu ? 'd-flex' : 'd-none'}`}>

            <div className="inner-menu">
            <div className="w-55">
                <div className="dropdownMenuBack" onClick={() => {closeAllDropdownMenus();}}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "0px"}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
                    Back
                </div>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/thailand"} className="" onClick={closeAllDropdownMenus}><div>🇹🇭 Thailand</div></Link>
                <Link to={"/asia/thailand/bangkok"} className="" onClick={closeAllDropdownMenus}><div>🛺 Bangkok</div></Link>
                <Link to={"/asia/thailand/chiangmai"} className="" onClick={closeAllDropdownMenus}><div>🐘 Chiang Mai</div></Link>
                <Link to={"/asia/thailand/kophangan"} className="" onClick={closeAllDropdownMenus}><div>🏝 Ko Phangan</div></Link>
                <Link to={"/asia/thailand/kosamui"} className="" onClick={closeAllDropdownMenus}><div>🌊 Ko Samui</div></Link>
                <Link to={"/asia/thailand/phuket"} className="" onClick={closeAllDropdownMenus}><div>🏖 Phuket</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/vietnam"} className="" onClick={closeAllDropdownMenus}><div>🇻🇳 Vietnam</div></Link>
                <Link to={"/asia/vietnam/hanoi"} className="" onClick={closeAllDropdownMenus}><div>🍲 Hanoi</div></Link>
                <Link to={"/asia/vietnam/hochiminhcity"} className="" onClick={closeAllDropdownMenus}><div>🛵 Ho Chi Minh City</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/taiwan"} className="" onClick={closeAllDropdownMenus}><div>🇹🇼 Taiwan</div></Link>
                <Link to={"/asia/taipei"} className="" onClick={closeAllDropdownMenus}><div>🥢 Taipei</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/hongkong"} className="" onClick={closeAllDropdownMenus}><div>🇭🇰 Hong Kong</div></Link>
                <Link to={"/asia/singapore"} className="" onClick={closeAllDropdownMenus}><div>🇸🇬 Singapore</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/malaysia"} className="" onClick={closeAllDropdownMenus}><div>🇲🇾 Malaysia</div></Link>
                <Link to={"/asia/malaysia/kualalumpur"} className="" onClick={closeAllDropdownMenus}><div>🇲🇾 Kuala Lumpur</div></Link>
                <Link to={"/asia/malaysia/borneo"} className="" onClick={closeAllDropdownMenus}><div>🦧 Borneo</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/philippines"} className="" onClick={closeAllDropdownMenus}><div>🇵🇭 The Philippines</div></Link>
                <Link to={"/asia/laos"} className="" onClick={closeAllDropdownMenus}><div>🇱🇦 Laos</div></Link>
                <Link to={"/asia/cambodia"} className="" onClick={closeAllDropdownMenus}><div>🇰🇭 Cambodia</div></Link>
                <hr className="w-80" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/nepal"} className="" onClick={closeAllDropdownMenus}><div>🇳🇵 Nepal</div></Link>
                <Link to={"/asia/bhutan"} className="" onClick={closeAllDropdownMenus}><div>🇧🇹 Bhutan</div></Link>
                <Link to={"/asia/mongolia"} className="" onClick={closeAllDropdownMenus}><div>🇲🇳 Mongolia</div></Link>
            </div>

            <div className="w-45">
                <Link to={"/asia/bali"} className="" onClick={closeAllDropdownMenus}><div>🏝 Bali</div></Link>
                <Link to={"/asia/bali/canggu"} className="" onClick={closeAllDropdownMenus}><div>🏄‍♀️ Canggu</div></Link>
                <Link to={"/asia/bali/ubud"} className="" onClick={closeAllDropdownMenus}><div>🐒 Ubud</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/japan"} className="" onClick={closeAllDropdownMenus}><div>🇯🇵 Japan</div></Link>
                <Link to={"/asia/japan/tokyo"} className="" onClick={closeAllDropdownMenus}><div>🗼 Tokyo</div></Link>
                <Link to={"/asia/japan/osaka"} className="" onClick={closeAllDropdownMenus}><div>🏯 Osaka</div></Link>
                <Link to={"/asia/japan/kyoto"} className="" onClick={closeAllDropdownMenus}><div>🎋 Kyoto</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/korea"} className="" onClick={closeAllDropdownMenus}><div>🇰🇷 Korea</div></Link>
                <Link to={"/asia/korea/seoul"} className="" onClick={closeAllDropdownMenus}><div>서울 Seoul</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/china"} className="" onClick={closeAllDropdownMenus}><div>🇨🇳 China</div></Link>
                <Link to={"/asia/china/beijing"} className="" onClick={closeAllDropdownMenus}><div>🥟 Beijing</div></Link>
                <Link to={"/asia/china/shanghai"} className="" onClick={closeAllDropdownMenus}><div>🧧 Shanghai</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/indonesia"} className="" onClick={closeAllDropdownMenus}><div>🇮🇩 Indonesia</div></Link>
                <Link to={"/asia/indonesia/jakarta"} className="" onClick={closeAllDropdownMenus}><div>🏙️ Jakarta</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/myanmar"} className="" onClick={closeAllDropdownMenus}><div>🇲🇲 Myanmar</div></Link>
                <Link to={"/asia/myanmar/yangon"} className="" onClick={closeAllDropdownMenus}><div>ရန်ကုန် Yangon</div></Link>
                <Link to={"/asia/myanmar/bagan"} className="" onClick={closeAllDropdownMenus}><div>🛕 Bagan</div></Link>
                <hr className="w-95" style={{marginRight: "auto", marginLeft: "0px"}}/>
                <Link to={"/asia/bangladesh"} className="" onClick={closeAllDropdownMenus}><div>🇧🇩 Bangladesh</div></Link>
                <Link to={"/asia/srilanka"} className="" onClick={closeAllDropdownMenus}><div>🇱🇰 Sri Lanka</div></Link>
                <Link to={"/asia/india"} className="" onClick={closeAllDropdownMenus}><div>🇮🇳 India</div></Link>
            </div>

            </div>
        </div>
    </>
    );
};

export default AsiaDropdownMenu;