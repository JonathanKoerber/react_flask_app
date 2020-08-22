import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import Hero from "./Hero"
import UnderLineSection from "./UnderLineSection";
import UnderLineSectionReverse from "./UnderLineSectionReverse";
import Main from "./Main";


    const data = [
        {
            "hero": [
                {"image": "/static/images/oprah_fav/oft_desktop_hero_image.png"},
                {"title": "OFT 2019"}
            ]
        },
        {
            "main": [{
                "underline_section": [
                    {"section_title": "Brief"},
                    {
                        "paragraph": "If there is a holiday shopping list worth merit, it’s Oprah’s Favorite Things. The list has been curated by Oprah," +
                            "herself for the last 25 years. Amazon has partnered with Oprah for the last five to offer shopping for these goodies" +
                            "at one place. Our target audience are women of color aged 30-50. In 2019 the media buy consisted of 2 spreads in O magazine," +
                            "digital ad page take over on Oprah.com, digital ads on Oprahmag.com, organic video placements on Oprah.com’s Facebook and" +
                            "Instagram social channels and the shopping experience of Oprah’s Favorite Things on Amazon.com. It takes a small village" +
                            "to make this “Christmas” miracle come true."
                    },
                    {
                        "team": [
                            {"role": [
                                    "Visual Design & Motion Design"
                                ]
                            },
                            {"members": [
                                    "Heather Mounsey - Creative Director",
                                    "Allison Wagner - Photo Art Director",
                                    "Katie Bren - Lead Design & Art Director",
                                    "Abigail Harris - Project"
                                ]
                            }
                        ]
                    }
                ]
            },
                {"underline_section": [
                        {"section_title": "Print Adds"},
                        {
                            "paragraph": "I had little oversight on print ads after conceptualizing. We hired an agency to photo retouch and create the\n" +
                                "      mechanicals. I spoke with them early on about process and expectations. The photo art director annotated editing\n" +
                                "      notes passed on by our producer. I assisted only as an extra pair of eyes when reviewing proofs and offering critique.\n" +
                                "      Upon, receiving mechanicals I proofed them for any potential errors and uploaded final mechanicals to Hearst\n" +
                                "      (O magazine) on the due date."
                        },
                        {
                                    "color_back": [
                                        {"image": "./static/images/oprah_fav/Image_1.png"},
                                        {"image": "./static/images/oprah_fav/Image_2.png"},
                                        {"color": "#e3f7f7"}
                                    ]
                        }
                    ]
                },
                {"underline_section_reverse":[
                {"thin_column":[
                    {"section_title": "Dynamic Adds"},
                    {"paragraph": "Due to budget constraints (and life challenges), I was not able to attend the photo shoot. However, I armed\n" +
                            "        my fellow creatives with concept sketches and a run-down of what I needed. To make sure they captured everything\n" +
                            "        to properly execute these ads I got on a live call with the photographer on set and explained to him my concept\n" +
                            "        and discussed thoughts on what would be the best way to capture the shots. With his partnership, shots for digital\n" +
                            "        were done in two days. After retouch was completed and assets where masked in individual layers, I utilized Animate\n" +
                            "        CC to create motion graphics in multiple sizes. Depending on the size of the creative different assets we used. I included\n" +
                            "        a hover state for each graphic (where applicable) to tie in with our “sparkle” onsite creative."},
                    {"image_tall": "./static/images/oprah_fav/Gif_MP4/2019_q3_us_oft_300x600_F.gif"}
                ]},
                {"weird_image_grid":[
                    {"image_one": "./static/images/oprah_fav/HTML5_concepts.png"},
                    {"image_two": "./static/images/oprah_fav/Gif_MP4/2019_q3_us_oft_728x90_F.gif"},
                    {"image_three": "./static/images/oprah_fav/Gif_MP4/2019_q4_us_oft_970x250_F.gif"}
                ]}
        ]},
                {"underline_section": [
            {"section_title": "Social"},
            {"paragraph": "As a creative team, we stretched on the ask for social content. Originally, Oprah’s team asked us for static images.\n" +
                    "      We asked if there was an opportunity to do something more for our customer on social platforms. After asking several\n" +
                    "      times… weeks later we were told we could do video. We had no video content, Oh no! But there was no fear. We quickly\n" +
                    "      researched, concepted and consulted social experts and delivered 3 MP4s. 1 to be used on both Facebook and Instagram\n" +
                    "      and the other two were specific for each channel. In addition, we also gave them the static images they requested."},
            {"video": [
                {"poster": "./static/images/oprah_fav/desktop_project_detail_lg_imag.png"},
                {"source": "./static/images/oprah_fav/Gif_MP4/OFT_social.mp4"}
            ]}
        ]},
        {"underline_section": [
            {"section_title": "Onsite"},
            {"paragraph": "It took 3 visual designers to bring together the onsite shopping experience. We partnered with UX to offer customers\n" +
                    "      1 page shopping for Oprah’s list. We captured an editorial feel above the fold with a combination of Amazon’s Holiday\n" +
                    "      Styleguide and Oprah creative featuring top products. Below, customers could explore products and read actual Oprah\n" +
                    "      quotes for each. I helped create onsite traffic drivers as static and animated gifs. I helped create graphics for product\n" +
                    "      collections within the product grid and I helped create the Spanish version of the onsite experience."},
            {"image_full": "./static/images/oprah_fav/desktop_project_detail_lg_imag_x.png"}
        ]},
        {"underline_section": [
            {"section_title": "Customer Journey"},
            {"video":[
                {"poster": "./static/images/oprah_fav/desktop_project_detail_lg_imag_y.png"},
                {"source": "./static/images/oprah_fav/Gif_MP4/OFT_journey.mp4"}
            ]}
        ]}
            ]
        }
    ];
    const flair = [
        {
        "hero":[
        {"image": "./static/images/flair/flair_desktop_hero_image.png"},
        {"title":"Flair"}
    ]},
    {"main":[
        {"underline_section":[
            {"section_title": "Brief"},
            {"paragraph":" I’ve been interested in UX and UI design. I took the Udacity Product Design course and this was it’s outcome.\n" +
                    "      The course covers, product ideation and validation, UI/UX design, design sprints and identifying key metrics.\n" +
                    "      Students can choose to ideate their own unique product or complete the course with one of their examples.\n" +
                    "      I created a unique app that enables a user to design their own pin-back buttons."},
                {"team":[
                    {"role": [
                        "Visual Design & Motion Design"
                    ]},
                    {"members":[
                        "Solo project for a course.",
                        "Feedback and critiques by Amazon employees"
                    ]}

                ]}
            ]},

        {"underline_section": [
            {"section_title": "Ideation and validation"},
            {"paragraph": "An original idea is hard to come by. The course suggests some ideas to complete the project. I was making some pin\n" +
                    "      back buttons for a non-profit I volunteer and was considering going that route. Then I realized that pin-back buttons\n" +
                    "      are something that most everyone likes! My next thought was: Is there a convenient way for anyone to design and make\n" +
                    "      a button. Of course there is. – Web based services like Zazzle. I thought the idea was dead, until I did further research\n" +
                    "      and realized that all option were desktop web based. So now the challenge is to create an application that can be accessed\n" +
                    "      on a mobile device so users can create buttons on a whim. A key component of the design is to build-in restrictions to allow\n" +
                    "      the user to create a beautiful design without letting them feel limited by the process."},
                {"image_full": "./static/images/flair/desktop_project_detail_lg_imag.png"}
        ]},
        {"underline_section":[
            {"section_title": "Features"},
            {"paragraph":"I created a project requirements chart in an effort to make this as close to \n" +
                    "            an actual project request as possible. Within this chart I identified the needs of the business\n" +
                    "            and the needs fo the user. Through this I learned that the user needs and busines needs can be very\n" +
                    "            different. It's my responsibility to find a balance where business requirements are mostly met without \n" +
                    "            sacrificing the needs fo the user."},
            {"image_full":"./static/images/flair/desktop_project_detail_lg_requirements.png"}
        ]},  {"underline_section":[
            {"section_title": "Personas"},
            {"paragraph":"User personas were created to identify the various types fo users for this app. The users \n" +
                    "            range from complete technology novices to super users and across many ages. This informed me that it would \n" +
                    "            be critical to design the app features with ease fo use as a top priority"},
            {"image_full": "./static/images/flair/desktop_project_detail_lg_personas.png"}
        ]}, {"underline_section":[
                {"section_title": "User Flows"},
                {"paragraph":"I created flow charts identifying happy paths and fringe cases for use of the app. These \n" +
                        "                flows helped identify the many ways a user can start and finish the task of designing a button. I found \n" +
                        "                that there is no linear path a user must follow." },
                {"image_full":"./static/images/flair/desktop_project_detail_lg_flow.png"}
            ]},
            {"underline_section":[
                {"section_title": "Reiterative Design"},
                {"paragraph":"Low fidelity prototypes were designed early on to test assumptions. This helped immensely to quickly sketch UI\n" +
                        "      elements and to test user flows. As the project progressed, high fidelity protypes where created to administer\n" +
                        "      more user tests. Many designs were reiterated based on these tests. I am fortunate to have access to UX designers\n" +
                        "      that agreed to meet with me and critique my designs. Together with their feedback and the user tests I was able\n" +
                        "      to create an experience I feel confident is intuitive."},
                {"image_full": "/static/images/flair/desktop_project_detail_lg_imag_ba.png"}
        ]}, {"underline_section":[
                    {"image_row_reverse": [
                        {"text":[
            {"section_title": "UI Design/ Visual Design"},
            {"paragraph":"A simple color pallet comprised of black, grey and white tones is utilized in the design canvas of this app. This\n" +
                    "          allows for an uninterrupted work space for the user. The hot pink/ purple, I affectionally named “Beat” is the brand\n" +
                    "          color. This color embodies the energy and appeal of pin-back buttons. The shapes throughout the experience give a nod\n" +
                    "          to shape of the buttons themselves. This roundness carries on the buttons as well. The whole UI underwent many iterations\n" +
                    "          based on user tests."}
                    ]},
                            {"image_full": "./static/images/flair/pets_category_icon_1_copy_32x.png"},
                            {"image_full": "./static/images/flair/pets_category_icon_1_copy2x.png"},
                            {"image_full": "./static/images/flair/pets_category_icon_12x.png"}

        ]},
                    {"image_row": [
                            {"image_full": "./static/images/flair/desktop_project_detail_lg_imag_bv.png"},
                            {"image_full": "./static/images/flair/desktop_project_detail_lg_imag_bw.png"},
                            {"image_full": "./static/images/flair/desktop_project_detail_lg_imag_bu.png"}
                        ]}
    ]}
    ]}
];
    const   pets = [
    {"hero": [
        {"image": "./static/images/pets/pets_desktop_hero_image.png"},
        {"title": "Amazon Pets"}
    ]},
    {"main": [
        {"underline_section":[
            {"section_title": "Brief"},
            {"paragraph":"The pet business partners within Amazon requested aid with “re-branding” of their category.\n" +
                    "      They expressed concern that the pet business was overlooked by customers who preferred to shop with competitors.\n" +
                    "      They want to position themselves as leaders in the category with the knowledge and the ability to meet the needs of any pet parent and their pet.\n" +
                    "      They also aim to have a well performing Instagram account. The deliverable is a blue-print for branding in both digital and print."},
            {"team":[
                {"role": [
                    "Visual Design"
                ]},
                {"members":[
                    "John Mchogh - Design Manager",
                    "Peter Ty - Art Director",
                    "Jeff Turner - Copywriter/ Strategist",
                    "Cathy Synowiec - Project Manager"
                ]}
            ]}
            ]},
    {"underline_section":[
            {"image_row": [
            {"text":[
            {"section_title": "Competitor Audit"},
            {"paragraph":"Before we could begin we had to look at the landscape of this business. We looked at top retailers and brands around the world to determine what\n" +
                    "        traits customers are attracted to. In addition, we analyzed color usage, photography and graphic treatment."},
                    ]},
            {"image_full": "./static/images/pets/desktop_project_detail_sml_ima_bg.png"}
            ]},
            ]},
{"underline_section":[
            {"section_title": "Concepts"},
            {"paragraph":"Once we felt we understood the business, we presented 3 concepts that would be unique to the Amazon Pet category.\n" +
                    "      Identifying pros and cons for each one, the business partners chose to combine 2 concepts. They liked the large toolkit of one and the ownership of another."},
            {"image_full": "./static/images/pets/desktop_project_detail_lg_imag.png"}
    ]},
{"underline_section":[
         {"image_row_reverse": [
                 {"text":[
            {"section_title": "Color Pallet"},
            {"paragraph":"The color is influenced by colors found in nature. Animal color in particular."},
                         ]},
            {"image_full": "./static/images/pets/desktop_project_detail_sml_ima.png"}
            ]}
    ]},
{"underline_section":[

            {"section_title": "Graphic Treatments"},
            {"paragraph":"Graphic usage was divided into 3 sections. 1 is foundational, following the lead of the core brand with simplicity\n" +
                    "      and authenticity. This is to be used onsite. 2 is for visual enhancements. This is the tone of the brand and it’s identifying markers.\n" +
                    "      This to be used particularly offsite. 3 is for social media only. These are decorative elements to dress up product and photography."},
            {"image_full": "./static/images/pets/desktop_project_detail_lg_imag_cb.png"},
            {"image_full": "./static/images/pets/desktop_project_detail_lg_imag_cc.png"},
            {"image_full": "./static/images/pets/desktop_project_detail_lg_imag_cd.png"}
    ]},
    {"underline_section": [
        {"section_title": "Illustrations"},
        {"paragraph":"I owned illustration for this project with guidance from the Art Director. The drawings are simple and loose with hand drawn\n" +
                "      qualities. They embody the care-free nature of our own pets."},
        {"image_full": "./static/images/pets/desktop_project_detail_lg_imag_ce.png"},
            {"image_row":
                [
             {"image_full": "./static/images/pets/social_illustrations.png"},
             {"image_full": "./static/images/pets/social_patterns.png"}
        ]
             },
            {"image_row_no_flex":
                [
                    {"image_full": "./static/images/pets/pets_illustration_DOG_G.png"},
                    {"image_full": "./static/images/pets/pets_illustration_CAT_E.png"},
                    {"image_full": "./static/images/pets/pets_illustration_DOG_E_cr.png"},
                    {"image_full": "./static/images/pets/pets_illustration_HORSE_A.png"},
                    {"image_full": "./static/images/pets/pets_illustration_CAT_D.png"},
                    {"image_full": "./static/images/pets/pets_illustration_DOG_A.png"},
                    {"image_full": "./static/images/pets/pets_illustration_REPTILE_A.png"},
                    {"image_full": "./static/images/pets/pets_illustration_S_ANIMAL_A.png"},
                    {"image_full": "./static/images/pets/pets_illustration_CAT_A.png"},
                    {"image_full": "./static/images/pets/pets_illustration_REPTILE_C.png"}
                ]
            }
        ]},
        {"underline_section":
             [
                {"section_title": "Swag"},
                 {"paragraph": "We decided to add a little fun into the book\n" +
                         "                 with examples of fun swag."},
                 {"image_row": [
                 {"image_column":[
                        {"image_full": "./static/images/pets/desktop_project_detail_lg_imag_ct.png"},
                        {"image_full": "./static/images/pets/desktop_project_detail_lg_imag_cu.png"},
                         ]},
                         {"image_column":[
                        {"image_full": "./static/images/pets/desktop_project_detail_lg_imag_cv.png"}
                        ]}
                    ]}
             ]}

]}
        ];
    const pdc = [
    {"hero":[
        {"image": "./static/images/prime_day/pdc_desktop_hero_image.png"},
        {"title":"Prime Day Concerts"}
    ]},
    {"main":[
        {"underling_section": [
            {"section_title": "Brief"},
            {"paragraph": "2019 was the 2nd year Amazon celebrated Prime membership with an exclusive Prime Day Concert. Featuring live performances\n" +
                    "        by headliner, Taylor Swift, Dua Lipa, Sza, Becky G, and hosted by Jane Lynch. With a large budget and multiple stakeholders\n" +
                    "        including Amazon Music and Amazon Video, this concert was to be broadcast live on Amazon Video. The venue itself allowed\n" +
                    "        entrance to Prime members by invitation only at absolutely no cost with multiple photo opportunities and swag at the venue\n" +
                    "        with Prime Day creative. A small creative team of three were responsible for the physical NYC venue experience with the creative\n" +
                    "        director being stretched to oversee cross-over to onsite and Amazon Video. Managing 3rd party vendors, maintaining brand authenticity\n" +
                    "        and maintaining creative at a high bar was a priority for myself and the rest of the creative team. With pantone colors in hand we headed\n" +
                    "        to New York City 5 days prior to show time!"},
            {"team": [
                {"role": [
                    "Visual Design & Motion Design"
                ]},
                {"team": [
                "Heather Mounsey - Creative Director",
                "Allison Wagner - Photo Art Director",
                "Katie Bren - Lead Design & Art Director",
                "Abigail Harris - Project Manager"
                ]}

            ]}
        ]},
        {"underline_section":[
            {"image_row":[
            {"text": [
                {"section_title": "Assets & Color Pallet"},
                {"paragraph": " Prime Day Concert exclusive creative assets were made for this event and utilized through-out the venue. In addition,\n" +
                        "        we utilized the Out-of-Home color pallet which had more saturated colors. It was a conscience choice to use some of\n" +
                        "        the on-site (pastel) color pallet as accent colors."}
            ]},
                {"image_full": "./static/images/prime_day/desktop_project_detail_sml_ima_b.png"}
]}
        ]},
        {"underline_section": [
            {"section_title": "Exterior Signage & Posters"},
            {"paragraph": "I assisted in managing installation of the 3D printed marquee that sat atop of Manhattan Center. Careful attention\n" +
                    "        was given to kerning and orientation to each piece for brand authenticity. Taking a creative que from the motion\n" +
                    "        graphics used for the event, I designed four 8ft x 4ft posters featuring our performers. These oversized posters\n" +
                    "        were placed at the entrance of the venue. Assets for these “larger-than-life” posters was not an easy feat to acquire\n" +
                    "        causing art direction to change from the original concept. Utilizing my past experience in photo editing I was able to\n" +
                    "        salvage images that would otherwise not be usable in print of this scale. In addition to the art posters, I also designed\n" +
                    "        an oversized “schedule of events” with art director oversight. Color matching between pieces was a challenge."},
            {"image_full": "./static/images/prime_day/desktop_project_detail_lg_imag_b.png"}
        ]},
        {"underline_section": [
            {"image_row_reverse":[
                {"text": [
            {"section_title": "Lobby"},
                {"paragraph":"This area did get lots of traffic. Most guests used the restroom facilities in this area where we partnered with\n" +
                        "            “Belei” for freebies. Catering was also set-up here as well as additional Wickedly Prime freebies. An opportunity\n" +
                        "            for guests to get free on demand t-shirts printed of exclusive Prime Day Concert swag! Designing for these t-shirts\n" +
                        "            was simple leveraging our Prime Day assets however, I did do a touch of editing and adjusted layout to a couple of the\n" +
                        "            designs. As visual designer, I also handled the toolkit. This consisted of wayfinding signage, wristbands,\n" +
                        "            ambassador uniforms, partner signage, merch, catering menu… Pretty much any of the extra things to make the event come together."}
]},
                {"image_full": "./static/images/prime_day/desktop_project_detail_sml_ima_bq.png"}
]}
        ]},
        {"underline_section": [
            {"section_title": "Promenade"},
            {"paragraph": "   All guests stepped and viewed this space. On either side of this area, were photo opportunities to interact with\n" +
                    "        our Prime Day papercrafts in the form of life size 3D sculptures. To the left of the entrance of the entrance was\n" +
                    "        the Prime Day band. This sculpture featured a female singer, while guest were encouraged by our ambassadors to pose\n" +
                    "        with guitars, keyboards and even play a drum set! On the right side of this space was a rather peculiar 3D sculpture\n" +
                    "        featuring what we affectionally call “Cat DJ” who our ambassadors also encouraged guests to take pictures with. The\n" +
                    "        challenge of setting up the promenade was to allow plenty of walking space towards the performance stage. The crew for\n" +
                    "        sound control, lighting and effects were also set up here. It was upmost importance for them to do their jobs well, while\n" +
                    "        our guests and ambassadors celebrated Prime Day with photos and music. Before show time, I and the rest of the creative\n" +
                    "        team helped pose and place the 3D sculptures and signage while also noting defects and requesting the staging crew to make\n" +
                    "        any repairs. The stage was made to look like Echo dots on either side. Looking up to the balconies there were barricades\n" +
                    "        wrapped in Prime Day colors and music notes to carry through the theme and message. Pst… Stage motion graphics took a\n" +
                    "        cue from me in colorizing the artist photos."},
            {"image_full": "./static/images/prime_day/desktop_project_detail_lg_imag.png"}
        ]},
        {"underline_section":[
            {"image_row": [
                {"text": [
                    {"section_title": "VIP Balcony"},
                    {"paragraph": "Although, I had little design work in this area, I helped with pre-press of the throw pillows, table tents and Rivet\n" +
                            "        sign. I helped most with some physical labor moving furniture. I voiced my opinion about where to place catering tables\n" +
                            "        and also helped stage the photo opportunities in this space. The directional signs to the restrooms were my handywork. lol"}
                ]},
                {"image_full": "./static/images/prime_day/desktop_project_detail_sml_ima.png"}
            ]}
        ]},
        {"underline_section":[
            {"section_title": "Basement & Toolkits"},
            {"paragraph": "This area did get lots of traffic. Most guests used the restroom facilities in this area where we partnered with\n" +
                    "        “Belei” for freebies. Catering was also set-up here as well as additional Wickedly Prime freebies. An opportunity\n" +
                    "        for guests to get free on demand t-shirts printed of exclusive Prime Day Concert swag! Designing for these t-shirts\n" +
                    "        was simple leveraging our Prime Day assets however, I did do a touch of editing and adjusted layout to a couple of the\n" +
                    "        designs. As visual designer, I also handled the toolkit. This consisted of wayfinding signage, wristbands,\n" +
                    "        ambassador uniforms, partner signage, merch, catering menu… Pretty much any of the extra things to make the event come together."},
            {"image_row_no_flex": [
                {"image_full": "./static/images/prime_day/desktop_project_detail_tall_im.png"},
                {"image_full": "./static/images/prime_day/desktop_project_detail_tall_im_bc.png"},
                {"image_full": "./static/images/prime_day/desktop_project_detail_tall_im_bb.png"}
             ]}
        ]}
        ]}
    ];
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