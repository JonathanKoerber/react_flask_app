import React, {useState, useEffect} from 'react';
import Hero from "./Hero"
import UnderLineSection from "./UnderLineSection";
import UnderLineSectionReverse from "./UnderLineSectionReverse";
import Main from "./Main";


 function getElements(e) {
        if (e.hero) {
            return (
                 <Hero data={e.hero}/>
            )
        } else if (e.main) {
            return (
                <Main>
                    {e.main.map((u, i) => {
                            if (u.underline_section) {
                                return (
                                    <UnderLineSection data={u.underline_section}/>
                                )
                            }else if(u.underline_section_reverse){
                                  return (
                                    <UnderLineSectionReverse data={u.underline_section_reverse}/>
                                )
                            }
                        }
                    )
                    }
                </Main>
            )
            }
        }
function Detail(props) {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch( '/api'+props.project).then(res => res.json()).then(data => {
            setDetail(data.data)
        }).catch(function (err) {
            console.log(err)
        })
    }, []);

    return(

        detail.map((d, index) => {
            return getElements(d);
       })
    )
}

export default Detail;