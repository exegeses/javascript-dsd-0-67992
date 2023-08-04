const body = document.querySelector('body');

body.addEventListener(
        'contextmenu',
        function( e )
        {
            e.preventDefault();
            alert('no copies mi código');
        }
    );