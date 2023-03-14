
import React from 'react'
const HigllightedNavbar = () => {
    const sections = document.querySelectorAll('section')
    const navitems = document.querySelectorAll('.listTopicItemsClass li a')
    window.addEventListener('scroll', () => {
        let current = '';
        let value = '';
        sections.forEach(section => {

            const sectionHeight = section.offsetTop;
            if (window.scrollY > sectionHeight) {
                current = section.getAttribute('id');
            }

            navitems.forEach(li => {
                document.getElementById(li.getAttribute('id')).style.color = 'white'
                if (li.classList.contains(current)) {
                    document.getElementById(li.getAttribute('id')).style.color = 'rgb(128, 255, 0)'
                }

            })
            // document.getElementById(value).style.color = "white";

        })
    })
}

export default HigllightedNavbar