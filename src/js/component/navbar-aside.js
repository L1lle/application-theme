module.exports = (($) => {

    class NavbarAside {

        toggle(element) {
            const asideSide = $(element).data('target');

            $('.navbar-aside.' + asideSide).toggleClass('d-none');

        }

        static _handleToggle(navbarAsideInstance) {

            return function(event) {
                if (event) {
                    event.preventDefault()
                }

                navbarAsideInstance.toggle(this);
            }
        }
    }

    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */

    $(document).on(
        'click',
        '[data-toggle="aside"]',
        NavbarAside._handleToggle(new NavbarAside())
    )

    return NavbarAside

})(jQuery)
