import React from 'react'
import "./Carrier.css"
import lefticon from "../../assets/Carrier/lefticon.svg"
import righticon from "../../assets/Carrier/righticon.svg"
import logo1 from "../../assets/Carrier/logo1.svg"
import logo2 from "../../assets/Carrier/logo2.svg"
import logo3 from "../../assets/Carrier/logo3.svg"
import logo4 from "../../assets/Carrier/logo4.svg"
import logo5 from "../../assets/Carrier/logo5.svg"
import logo6 from "../../assets/Carrier/logo6.svg"
import card1 from "../../assets/Carrier/card1.jpg"
import card2 from "../../assets/Carrier/card2.jpg"
import card3 from "../../assets/Carrier/card3.jpg"


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { HiLink } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';



function Carrier() {

    const [expanded, setExpanded] = React.useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(prev => (prev === panel ? null : panel));
    };


    const cards = [
        {
            id: 1,
            img: card1,
            heading1: 'Headline',
            para: 'Sed imperdiet enim ligula,vitae vierra justo',
            readmore: "Read More"
        },
        {
            id: 2,
            img: card2,
            heading1: 'Headline',
            para: 'Sed imperdiet enim ligula,vitae vierra justo',
            readmore: "Read More"
        },
        {
            id: 3,
            img: card3,
            heading1: 'Headline',
            para: 'Sed imperdiet enim ligula,vitae vierra justo',
            readmore: "Read More"
        },
        {
            id: 4,
            img: card1,
            heading1: 'Headline',
            para: 'Sed imperdiet enim ligula,vitae vierra justo',
            readmore: "Read More"
        },
        {
            id: 5,
            img: card2,
            heading1: 'Headline',
            para: 'Sed imperdiet enim ligula,vitae vierra justo',
            readmore: "Read More"
        },
    ]
    return (
        <div className="carriers_outer_main">
            <div className="carrier_banner_outer">
                <div className="carriers_banner">
                    <img src={lefticon} alt="lefticon" className="banner_left_icon" />
                    <img src={righticon} alt="lefticon" className="banner_right_icon" />
                    <h1 className="carrier_bg_heading">
                        CAREERS
                    </h1>
                    <div className="carrier_banner_heading_text">
                        <h1 className="carrier_heading">
                            Be a Part of Our Journey
                        </h1>
                        <p className="carrier_banner_para">
                            Integrate once and never worry about scaling again. Never deal with fragmented Layer 2 systems.
                        </p>
                    </div>
                    <div className="carriers_banner_buttons">
                        <button className="banner_left_button">
                            EXPLORE OPPORTUNITY
                        </button>
                        <button className="carrier_right_button">
                            SEE THE BENEFIT
                        </button>
                    </div>
                </div>
            </div>




            <div className="carrier_layer2_main_outer">
                <div className="carrier_layer2_outer">
                    <div className="carrier_layer2_left">
                        <h1 className="layer2_heading">
                            The Benefit Working  Here
                        </h1>
                        <p className="layer2_left_para">
                            We recognize that compensation and benifits play a major part in making
                            sure that you feel you can foucs on your work.
                            We offer generous packages to make sure your
                            feel respected and appreciated as an employee.
                        </p>
                    </div>
                    <div className="carrier_layer2_right">


                        <div className="carrier_right_cards_outer">




                            <div className="carrier_layer2_right_card">
                                <div className="layer2_card_logo_outer">
                                    <img src={logo1} alt="logo1" className="layer2_card_logo" />
                                </div>
                                <div className="layer2_card_text">
                                    <h6 className="layer2_card_heding">
                                        Working Remotely
                                    </h6>
                                    <div className="layer2_card_para">
                                        Ut sed eros finibus,placerat orci id,dapibus mauris. Vestibulum consequant hendrerit lacus.
                                    </div>
                                </div>
                            </div>
                            <div className="carrier_layer2_right_card">
                                <div className="layer2_card_logo_outer">
                                    <img src={logo2} alt="logo2" className="layer2_card_logo" />
                                </div>
                                <div className="layer2_card_text">
                                    <h6 className="layer2_card_heding">
                                        Working Remotely
                                    </h6>
                                    <div className="layer2_card_para">
                                        Ut sed eros finibus,placerat orci id,dapibus mauris. Vestibulum consequant hendrerit lacus.
                                    </div>
                                </div>
                            </div>
                            <div className="carrier_layer2_right_card">
                                <div className="layer2_card_logo_outer">
                                    <img src={logo3} alt="logo3" className="layer2_card_logo" />
                                </div>
                                <div className="layer2_card_text">
                                    <h6 className="layer2_card_heding">
                                        Working Remotely
                                    </h6>
                                    <div className="layer2_card_para">
                                        Ut sed eros finibus,placerat orci id,dapibus mauris. Vestibulum consequant hendrerit lacus.
                                    </div>
                                </div>
                            </div>
                            <div className="carrier_layer2_right_card">
                                <div className="layer2_card_logo_outer">
                                    <img src={logo4} alt="logo4" className="layer2_card_logo" />
                                </div>
                                <div className="layer2_card_text">
                                    <h6 className="layer2_card_heding">
                                        Working Remotely
                                    </h6>
                                    <div className="layer2_card_para">
                                        Ut sed eros finibus,placerat orci id,dapibus mauris. Vestibulum consequant hendrerit lacus.
                                    </div>
                                </div>
                            </div>
                            <div className="carrier_layer2_right_card">
                                <div className="layer2_card_logo_outer">
                                    <img src={logo5} alt="logo5" className="layer2_card_logo" />
                                </div>
                                <div className="layer2_card_text">
                                    <h6 className="layer2_card_heding">
                                        Working Remotely
                                    </h6>
                                    <div className="layer2_card_para">
                                        Ut sed eros finibus,placerat orci id,dapibus mauris. Vestibulum consequant hendrerit lacus.
                                    </div>
                                </div>
                            </div>
                            <div className="carrier_layer2_right_card">
                                <div className="layer2_card_logo_outer">
                                    <img src={logo6} alt="logo6" className="layer2_card_logo" />
                                </div>
                                <div className="layer2_card_text">
                                    <h6 className="layer2_card_heding">
                                        Working Remotely
                                    </h6>
                                    <div className="layer2_card_para">
                                        Ut sed eros finibus,placerat orci id,dapibus mauris. Vestibulum consequant hendrerit lacus.
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="carrier_layer3_main">
                <div className="carrier_layer3_outer">
                    <div className="carrier_layer3_banner">
                        <p className="layer3_banner_para">
                            Suspendisse eleifend nunc non varius rhoncus.
                            Nam posuere accumsan porta.
                        </p>
                        <div className="layer3_banner_button_outer">
                            <button>More About Us</button>
                        </div>
                    </div>
                </div>

                <div className="carrier_layer3_part1">
                    <h1 className="carrier_layer3_part1_heading">
                        Opened Positions
                    </h1>
                </div>
                <div className="carrier_layer3_part2_outer">
                    <div className="layer3_part2_nav_bar">
                        <p className="part2_nav_items">
                            ALL
                        </p>
                        <p className="part2_nav_items">
                            Our
                        </p>
                        <p className="part2_nav_items">
                            Clients
                        </p>
                    </div>


                    <div className="layer3_part3_outer_main">
                        <div className="layer3_part3_outer">
                            <Accordion
                                expanded={expanded === 'panel1'}
                                onChange={handleChange('panel1')}
                                disableGutters
                                elevation={0}
                                square
                                sx={{
                                    width: '100%',
                                    // height: expanded ? 'auto' : '6vw', 
                                    transition: 'all 0.3s ease',
                                    marginTop: '3vw'
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                                    aria-controls="panel-content"
                                    id="panel-header"
                                    sx={{
                                        backgroundColor: 'white',
                                        flexDirection: 'row-reverse',
                                        height: '6vw',
                                        borderRadius: '2.5vw',
                                        boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)',
                                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                            transform: 'rotate(90deg)',
                                        },
                                        '& .MuiAccordionSummary-content': {
                                            marginLeft: 1,
                                        },
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start', // or 'center', 'space-between' etc.
                                            width: '100%',
                                            paddingLeft: '1vw',
                                            gap: "1vw"
                                        }}
                                        className='carrier_accordian'
                                    >
                                        <p className="accordian_top_text" style={{ margin: 0 }}>
                                            Marketing
                                        </p>
                                        <p className="accordia_header">
                                            Head of Product
                                        </p>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        padding: 2,
                                        // backgroundColor: 'red'

                                    }}
                                >
                                    <Typography>
                                        <div className="accoridian_content_outer">
                                            <div className="accordain_left">
                                                <p className="accordian_left_para">
                                                    Type Pellentesque ullamcorper alique  ultrices.
                                                    Aenean facilias vitea purus facilitias semper.Supendisse eleifind
                                                    nunc non virus rhoncus.Nam posuere accumsan porta.
                                                </p>
                                                <div className="accordian_left_layer2">
                                                    <h1 className="accordian_layer2_heading">
                                                        Job Description
                                                    </h1>
                                                    <div className="accordian_list_items_outer">


                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>
                                                <div className="accordian_left_layer3">
                                                    <h1 className="accordian_layer3_heading">
                                                        Requirements
                                                    </h1>
                                                    <div className="accordian_layer3_list_items_oueter">


                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>




                                            </div>
                                            <div className="accordian_right">
                                                <div className="right_top_icons_outer">
                                                    <p className="share">
                                                        Share
                                                    </p>
                                                    <div className="icons_outer">
                                                        <HiLink className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <BsLinkedin className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <FaTwitter className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <IoIosMail className='accordian_icons' />

                                                    </div>
                                                </div>

                                                <div className="accordian_right_icons_button">
                                                    <button>Apply Now</button>
                                                </div>
                                                <div className="accordian_right_details_outer">
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Location</p>
                                                        <p className="right_item">
                                                            Bandung
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Type</p>
                                                        <p className="right_item">
                                                            Full Time
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Quealification</p>
                                                        <p className="right_item">
                                                            Fresh Graduation
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Posted</p>
                                                        <p className="right_item">
                                                            22 jan 2023
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="right_buttons">


                                                    <div className="right_help_button_outer">
                                                        <button>
                                                            Ask for more help
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>

                                                    </div>
                                                    <div className="right_about_company_button_outer">
                                                        <button>
                                                            About Company
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                            <Accordion
                                expanded={expanded === 'panel2'}
                                onChange={handleChange('panel2')}
                                disableGutters
                                elevation={0}
                                square
                                sx={{
                                    width: '100%',
                                    // height: expanded ? 'auto' : '6vw', 
                                    transition: 'all 0.3s ease',
                                    marginTop: '3vw'
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                                    aria-controls="panel-content"
                                    id="panel-header"
                                    sx={{
                                        backgroundColor: 'white',
                                        flexDirection: 'row-reverse',
                                        height: '6vw',
                                        borderRadius: '2.5vw',
                                        boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)',
                                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                            transform: 'rotate(90deg)',
                                        },
                                        '& .MuiAccordionSummary-content': {
                                            marginLeft: 1,
                                        },
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start', // or 'center', 'space-between' etc.
                                            width: '100%',
                                            paddingLeft: '1vw',
                                            gap: "1vw"
                                        }}
                                    >
                                        <p className="accordian_top_text" style={{ margin: 0 }}>
                                            Design
                                        </p>
                                        <p className="accordia_header">
                                            Staff Product Designer
                                        </p>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        padding: 2,
                                        // backgroundColor: 'red'

                                    }}
                                >
                                    <Typography>
                                        <div className="accoridian_content_outer">
                                            <div className="accordain_left">
                                                <p className="accordian_left_para">
                                                    Type Pellentesque ullamcorper alique  ultrices.
                                                    Aenean facilias vitea purus facilitias semper.Supendisse eleifind
                                                    nunc non virus rhoncus.Nam posuere accumsan porta.
                                                </p>
                                                <div className="accordian_left_layer2">
                                                    <h1 className="accordian_layer2_heading">
                                                        Job Description
                                                    </h1>
                                                    <div className="accordian_list_items_outer">


                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>
                                                <div className="accordian_left_layer3">
                                                    <h1 className="accordian_layer3_heading">
                                                        Requirements
                                                    </h1>
                                                    <div className="accordian_layer3_list_items_oueter">


                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>




                                            </div>
                                            <div className="accordian_right">
                                                <div className="right_top_icons_outer">
                                                    <p className="share">
                                                        Share
                                                    </p>
                                                    <div className="icons_outer">
                                                        <HiLink className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <BsLinkedin className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <FaTwitter className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <IoIosMail className='accordian_icons' />

                                                    </div>
                                                </div>

                                                <div className="accordian_right_icons_button">
                                                    <button>Apply Now</button>
                                                </div>
                                                <div className="accordian_right_details_outer">
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Location</p>
                                                        <p className="right_item">
                                                            Bandung
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Type</p>
                                                        <p className="right_item">
                                                            Full Time
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Quealification</p>
                                                        <p className="right_item">
                                                            Fresh Graduation
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Posted</p>
                                                        <p className="right_item">
                                                            22 jan 2023
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="right_buttons">


                                                    <div className="right_help_button_outer">
                                                        <button>
                                                            Ask for more help
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>

                                                    </div>
                                                    <div className="right_about_company_button_outer">
                                                        <button>
                                                            About Company
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                expanded={expanded === 'panel3'}
                                onChange={handleChange('panel3')}
                                disableGutters
                                elevation={0}
                                square
                                sx={{
                                    width: '100%',
                                    // height: expanded ? 'auto' : '6vw', 
                                    transition: 'all 0.3s ease',
                                    marginTop: '3vw'
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                                    aria-controls="panel-content"
                                    id="panel-header"
                                    sx={{
                                        backgroundColor: 'white',
                                        flexDirection: 'row-reverse',
                                        height: '6vw',
                                        borderRadius: '2.5vw',
                                        boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)',
                                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                            transform: 'rotate(90deg)',
                                        },
                                        '& .MuiAccordionSummary-content': {
                                            marginLeft: 1,
                                        },
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start', // or 'center', 'space-between' etc.
                                            width: '100%',
                                            paddingLeft: '1vw',
                                            gap: "1vw"
                                        }}
                                    >
                                        <p className="accordian_top_text" style={{ margin: 0 }}>
                                            Product
                                        </p>
                                        <p className="accordia_header">
                                            Senior Product Manager, Asset
                                        </p>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        padding: 2,
                                        // backgroundColor: 'red'

                                    }}
                                >
                                    <Typography>
                                        <div className="accoridian_content_outer">
                                            <div className="accordain_left">
                                                <p className="accordian_left_para">
                                                    Type Pellentesque ullamcorper alique  ultrices.
                                                    Aenean facilias vitea purus facilitias semper.Supendisse eleifind
                                                    nunc non virus rhoncus.Nam posuere accumsan porta.
                                                </p>
                                                <div className="accordian_left_layer2">
                                                    <h1 className="accordian_layer2_heading">
                                                        Job Description
                                                    </h1>
                                                    <div className="accordian_list_items_outer">


                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>
                                                <div className="accordian_left_layer3">
                                                    <h1 className="accordian_layer3_heading">
                                                        Requirements
                                                    </h1>
                                                    <div className="accordian_layer3_list_items_oueter">


                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>




                                            </div>
                                            <div className="accordian_right">
                                                <div className="right_top_icons_outer">
                                                    <p className="share">
                                                        Share
                                                    </p>
                                                    <div className="icons_outer">
                                                        <HiLink className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <BsLinkedin className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <FaTwitter className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <IoIosMail className='accordian_icons' />

                                                    </div>
                                                </div>

                                                <div className="accordian_right_icons_button">
                                                    <button>Apply Now</button>
                                                </div>
                                                <div className="accordian_right_details_outer">
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Location</p>
                                                        <p className="right_item">
                                                            Bandung
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Type</p>
                                                        <p className="right_item">
                                                            Full Time
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Quealification</p>
                                                        <p className="right_item">
                                                            Fresh Graduation
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Posted</p>
                                                        <p className="right_item">
                                                            22 jan 2023
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="right_buttons">


                                                    <div className="right_help_button_outer">
                                                        <button>
                                                            Ask for more help
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>

                                                    </div>
                                                    <div className="right_about_company_button_outer">
                                                        <button>
                                                            About Company
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                expanded={expanded === 'panel4'}
                                onChange={handleChange('panel4')}
                                disableGutters
                                elevation={0}
                                square
                                sx={{
                                    width: '100%',
                                    // height: expanded ? 'auto' : '6vw', 
                                    transition: 'all 0.3s ease',
                                    marginTop: '3vw'
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                                    aria-controls="panel-content"
                                    id="panel-header"
                                    sx={{
                                        backgroundColor: 'white',
                                        flexDirection: 'row-reverse',
                                        height: '6vw',
                                        borderRadius: '2.5vw',
                                        boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)',
                                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                            transform: 'rotate(90deg)',
                                        },
                                        '& .MuiAccordionSummary-content': {
                                            marginLeft: 1,
                                        },
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start', // or 'center', 'space-between' etc.
                                            width: '100%',
                                            paddingLeft: '1vw',
                                            gap: "1vw"
                                        }}
                                    >
                                        <p className="accordian_top_text" style={{ margin: 0 }}>
                                            Engineering
                                        </p>
                                        <p className="accordia_header">
                                            Backend Engineer
                                        </p>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        padding: 2,
                                        // backgroundColor: 'red'

                                    }}
                                >
                                    <Typography>
                                        <div className="accoridian_content_outer">
                                            <div className="accordain_left">
                                                <p className="accordian_left_para">
                                                    Type Pellentesque ullamcorper alique  ultrices.
                                                    Aenean facilias vitea purus facilitias semper.Supendisse eleifind
                                                    nunc non virus rhoncus.Nam posuere accumsan porta.
                                                </p>
                                                <div className="accordian_left_layer2">
                                                    <h1 className="accordian_layer2_heading">
                                                        Job Description
                                                    </h1>
                                                    <div className="accordian_list_items_outer">


                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>
                                                <div className="accordian_left_layer3">
                                                    <h1 className="accordian_layer3_heading">
                                                        Requirements
                                                    </h1>
                                                    <div className="accordian_layer3_list_items_oueter">


                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>




                                            </div>
                                            <div className="accordian_right">
                                                <div className="right_top_icons_outer">
                                                    <p className="share">
                                                        Share
                                                    </p>
                                                    <div className="icons_outer">
                                                        <HiLink className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <BsLinkedin className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <FaTwitter className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <IoIosMail className='accordian_icons' />

                                                    </div>
                                                </div>

                                                <div className="accordian_right_icons_button">
                                                    <button>Apply Now</button>
                                                </div>
                                                <div className="accordian_right_details_outer">
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Location</p>
                                                        <p className="right_item">
                                                            Bandung
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Type</p>
                                                        <p className="right_item">
                                                            Full Time
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Quealification</p>
                                                        <p className="right_item">
                                                            Fresh Graduation
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Posted</p>
                                                        <p className="right_item">
                                                            22 jan 2023
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="right_buttons">


                                                    <div className="right_help_button_outer">
                                                        <button>
                                                            Ask for more help
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>

                                                    </div>
                                                    <div className="right_about_company_button_outer">
                                                        <button>
                                                            About Company
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                expanded={expanded === 'panel5'}
                                onChange={handleChange('panel5')}
                                disableGutters
                                elevation={0}
                                square
                                sx={{
                                    width: '100%',
                                    // height: expanded ? 'auto' : '6vw', 
                                    transition: 'all 0.3s ease',
                                    marginTop: '3vw'
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                                    aria-controls="panel-content"
                                    id="panel-header"
                                    sx={{
                                        backgroundColor: 'white',
                                        flexDirection: 'row-reverse',
                                        height: '6vw',
                                        borderRadius: '2.5vw',
                                        boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)',
                                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                            transform: 'rotate(90deg)',
                                        },
                                        '& .MuiAccordionSummary-content': {
                                            marginLeft: 1,
                                        },
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start', // or 'center', 'space-between' etc.
                                            width: '100%',
                                            paddingLeft: '1vw',
                                            gap: "1vw"
                                        }}
                                    >
                                        <p className="accordian_top_text" style={{ margin: 0 }}>
                                            Engineering
                                        </p>
                                        <p className="accordia_header">
                                            Senior Backend Engineer
                                        </p>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        padding: 2,
                                        // backgroundColor: 'red'

                                    }}
                                >
                                    <Typography>
                                        <div className="accoridian_content_outer">
                                            <div className="accordain_left">
                                                <p className="accordian_left_para">
                                                    Type Pellentesque ullamcorper alique  ultrices.
                                                    Aenean facilias vitea purus facilitias semper.Supendisse eleifind
                                                    nunc non virus rhoncus.Nam posuere accumsan porta.
                                                </p>
                                                <div className="accordian_left_layer2">
                                                    <h1 className="accordian_layer2_heading">
                                                        Job Description
                                                    </h1>
                                                    <div className="accordian_list_items_outer">


                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>
                                                <div className="accordian_left_layer3">
                                                    <h1 className="accordian_layer3_heading">
                                                        Requirements
                                                    </h1>
                                                    <div className="accordian_layer3_list_items_oueter">


                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>




                                            </div>
                                            <div className="accordian_right">
                                                <div className="right_top_icons_outer">
                                                    <p className="share">
                                                        Share
                                                    </p>
                                                    <div className="icons_outer">
                                                        <HiLink className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <BsLinkedin className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <FaTwitter className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <IoIosMail className='accordian_icons' />

                                                    </div>
                                                </div>

                                                <div className="accordian_right_icons_button">
                                                    <button>Apply Now</button>
                                                </div>
                                                <div className="accordian_right_details_outer">
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Location</p>
                                                        <p className="right_item">
                                                            Bandung
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Type</p>
                                                        <p className="right_item">
                                                            Full Time
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Quealification</p>
                                                        <p className="right_item">
                                                            Fresh Graduation
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Posted</p>
                                                        <p className="right_item">
                                                            22 jan 2023
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="right_buttons">


                                                    <div className="right_help_button_outer">
                                                        <button>
                                                            Ask for more help
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>

                                                    </div>
                                                    <div className="right_about_company_button_outer">
                                                        <button>
                                                            About Company
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                expanded={expanded === 'panel6'}
                                onChange={handleChange('panel6')}
                                disableGutters
                                elevation={0}
                                square
                                sx={{
                                    width: '100%',
                                    // height: expanded ? 'auto' : '6vw', 
                                    transition: 'all 0.3s ease',
                                    marginTop: '3vw'
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
                                    aria-controls="panel-content"
                                    id="panel-header"
                                    sx={{
                                        backgroundColor: 'white',
                                        flexDirection: 'row-reverse',
                                        height: '6vw',
                                        borderRadius: '2.5vw',
                                        boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)',
                                        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                                            transform: 'rotate(90deg)',
                                        },
                                        '& .MuiAccordionSummary-content': {
                                            marginLeft: 1,
                                        },
                                    }}
                                >

                                    <Typography
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start', // or 'center', 'space-between' etc.
                                            width: '100%',
                                            paddingLeft: '1vw',
                                            gap: "1vw"
                                        }}
                                    >
                                        <p className="accordian_top_text" style={{ margin: 0 }}>
                                            Engineering
                                        </p>
                                        <p className="accordia_header">
                                            Senior Frontend Engineer
                                        </p>
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        padding: 2,
                                        backgroundColor: 'none'


                                    }}
                                >
                                    <Typography>
                                        <div className="accoridian_content_outer">
                                            <div className="accordain_left">
                                                <p className="accordian_left_para">
                                                    Type Pellentesque ullamcorper alique  ultrices.
                                                    Aenean facilias vitea purus facilitias semper.Supendisse eleifind
                                                    nunc non virus rhoncus.Nam posuere accumsan porta.
                                                </p>
                                                <div className="accordian_left_layer2">
                                                    <h1 className="accordian_layer2_heading">
                                                        Job Description
                                                    </h1>
                                                    <div className="accordian_list_items_outer">


                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer2_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>
                                                <div className="accordian_left_layer3">
                                                    <h1 className="accordian_layer3_heading">
                                                        Requirements
                                                    </h1>
                                                    <div className="accordian_layer3_list_items_oueter">


                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                        <li className="accordian_layer3_list_items">
                                                            Type Pellentesque  ullamscoper aliquet ultrices.Aenean
                                                            facilisis vitae purus facilisis semper.
                                                        </li>
                                                    </div>
                                                </div>




                                            </div>
                                            <div className="accordian_right">
                                                <div className="right_top_icons_outer">
                                                    <p className="share">
                                                        Share
                                                    </p>
                                                    <div className="icons_outer">
                                                        <HiLink className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <BsLinkedin className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <FaTwitter className='accordian_icons' />

                                                    </div>
                                                    <div className="icons_outer">
                                                        <IoIosMail className='accordian_icons' />

                                                    </div>
                                                </div>

                                                <div className="accordian_right_icons_button">
                                                    <button>Apply Now</button>
                                                </div>
                                                <div className="accordian_right_details_outer">
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Location</p>
                                                        <p className="right_item">
                                                            Bandung
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Type</p>
                                                        <p className="right_item">
                                                            Full Time
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Quealification</p>
                                                        <p className="right_item">
                                                            Fresh Graduation
                                                        </p>
                                                    </div>
                                                    <div className="detalis_items">
                                                        <p className="lef_item">Posted</p>
                                                        <p className="right_item">
                                                            22 jan 2023
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="right_buttons">


                                                    <div className="right_help_button_outer">
                                                        <button>
                                                            Ask for more help
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>

                                                    </div>
                                                    <div className="right_about_company_button_outer">
                                                        <button>
                                                            About Company
                                                            <FaArrowRightLong className='help_button_icon' />
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>

                    <div className="layer3_part4_outer_main">

                        <div className="layer3_part4_outer">
                            <h1 className="part4_heading">
                                News and Updated
                            </h1>
                            <div className="bottom_line_outer">

                            </div>
                            <p className="part4_para">
                                Integrate once and never worry about scaling again.
                                Never deal with fragmented Layer 2 systems.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="carrier_cards_outer">

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    slidesOffsetBefore={20}
                    navigation={{
                        prevEl: ".custom-prev-button",
                        nextEl: ".custom-next-button",
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    loop={true}
                    className="carrier_last_Cards"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 13,
                        },
                        721: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >

                    {cards?.map((data, index) => (
                        <SwiperSlide key={index}>
                           <div className="carrier_card">
                    <div className="carrier_img_outer">

                        <img src={data.img} alt="card1" className="carrier_card_img" />
                    </div>
                    <div className="card_text_heading">
                        <h6 className="card_hading_one">
                            {data.heading1}
                        </h6>
                        <p className="card_para">
                            {
                                data.para
                            }
                         </p>
                        <p className="card_readmore">
                            {data.readmore}
                        </p>
                    </div>
                </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
            </div>
        </div>
    )
}

export default Carrier
