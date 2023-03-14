
const HigllightedNavbar = () => {
    const sections = document.querySelectorAll('section')
    const navitems = document.querySelectorAll('.listTopicItemsClass li a')
    window.addEventListener('scroll', () => {
        let current = ''
        sections.forEach(section => {
            const sectionPageHeight = section.clientHeight;
            const sectionHeight = section.offsetTop;
            if (window.scrollY > (sectionHeight- (sectionPageHeight/4))) {
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