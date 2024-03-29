const switchButton = document.getElementById('switch');
const switchButton2 = document.getElementById('sol');
const PCV_700 = '#102240';
const PCV_500 = '#1B396A';
const PCV_200 = '#A4B0C3';
const WHCV_700 = '#959595';
const WHCV_500 = '#F9F9F9';
const WHCV_200 = ' #FDFDFD';
const BCV_700 = '#0C0F17';
const BCV_500 = '#141927';
const BCV_200 = '#A1A3A9';
const BCV_400 = '#434752';
const WCV_700 = ' #685B04';
const TCV_700 = '#046531';
const SCV_500 = '#F2B90F';
const TCV_500 = '06A852';
const DCV_200 = '#D6A1B4';
const DCV_500 = '#991344';
const SUCV_500 = '#1AAC54';
const SUCV_200 = '#A3DEBB';
localStorage.setItem('mantener', 'true');


// Visibilidad de los filtros
function ShowFilters() {

    if (localStorage.getItem('mantener') == 'true') {
        if (localStorage.getItem('visible') != 'false') {
            document.getElementById('show-f').style.display = 'none';
            localStorage.setItem('visible', 'false');
        } else {
            document.getElementById('show-f').style.display = 'block';
            localStorage.setItem('visible', 'true');
        }
    }
}

//  Mantener Visibilidad de los filtros
if (localStorage.getItem('mantener') == 'true') {
    if (localStorage.getItem('visible') != 'false') {
        document.getElementById('show-f').style.display = 'block';
    }
}


switchButton.addEventListener('click', () => {




    // Ocultar moon
    switchButton.style.display = 'none';
    // Mostrar sol
    document.getElementById('sol').style.display = 'block';


    // Activamos el darkmode
    document.body.classList.toggle('dark');




    if (document.body.classList.contains('dark')) {
        // Agregamos todas las clases necesarias al click
        localStorage.setItem('theme', 'true');

        // Header RDI-dark 
        document.getElementById('dark-header').classList.add('dark');
        document.getElementById('RDI-dark').classList.add('dark');
        document.getElementById('login-dark').classList.add('dark');
        // 
        document.getElementById('dark-Lhelp').classList.add('dark-font');



        // Section
        document.getElementById('dark-headline').classList.add('dark-background');
        document.getElementById('dark-FH').classList.add('dark-font');
        // Place
        document.getElementById('dark-place').classList.add('dark-font-wh');
        document.getElementById('dark-gb-400').classList.add('dark-select');
        document.getElementById('input-4c').style.background = BCV_400;
        document.getElementById('input-4c').style.color = WHCV_500;
        // Filter
        document.getElementById('dark-filter').classList.add('filter-dark');
        document.getElementById('dark-filter1').style.fill = WHCV_500;
        // 
        document.getElementById('white-dark').classList.add('darkw-icon-bg');
        // Show
        document.getElementById('show-dark').style.background = PCV_200;
        document.getElementById('dark-bg-show').style.color = BCV_500;
        // Item
        document.getElementById('dark-item').classList.add('dark-item-shaw');
        document.getElementById('dark-item2').classList.add('dark-item-shaw');
        // Item Title
        document.getElementById('title-dark').style.color = PCV_200;
        // Item Type Doc 
        document.getElementById('type-dark').style.backgroundColor = PCV_200;
        document.getElementById('type-title-drak').style.color = BCV_500;
        // 
        document.getElementById('authors-dark').style.color = WHCV_500;
        document.getElementById('date-dark').style.color = WHCV_500;
        document.getElementById('descrip-dark').style.color = WHCV_500;

        // Item Title 2
        document.getElementById('title-dark2').style.color = PCV_200;
        // Item Type Doc 
        document.getElementById('type-dark2').style.backgroundColor = PCV_200;
        document.getElementById('type-title-dark2').style.color = BCV_500;
        // 
        document.getElementById('authors-dark2').style.color = WHCV_500;
        document.getElementById('date-dark2').style.color = WHCV_500;
        document.getElementById('descrip-dark2').style.color = WHCV_500;

        // Pagination
        document.getElementById('pagination-light').style.visibility = 'hidden';
        document.getElementById('pagination-dark').style.visibility = 'visible';

        // Filtros
        document.getElementById('show-f').classList.add('bg-dark-b');
        document.getElementById('border-dark').classList.add('border-dark');
        document.getElementById('select-f-1').classList.add('select-dark');
        document.getElementById('select-f-2').classList.add('select-dark');
        document.getElementById('input-dark').classList.add('select1-dark');
        // buttons
        document.getElementById('button-dark').classList.add('select-dark5');
        document.getElementById('button1-dark').classList.add('border-white');
        // Icons
        document.getElementById('icon-dark').style.fill = SUCV_200;
        document.getElementById('icon1-dark').style.fill = DCV_200;
        document.getElementById('menos-dark').style.fill = BCV_500;





        // Footer
        document.getElementById('dark-footer').classList.add('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.add('dark-icon-bg');
        // Etiqueeta a
        document.getElementById('dark-a1').classList.add('dark-font');
        document.getElementById('dark-a2').classList.add('dark-font');
        document.getElementById('dark-a3').classList.add('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.add('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = WCV_700;
        document.getElementById('dark-thel').style.fill = TCV_700;









    } else {
        // Removemos todas las clases necesarias al click
        localStorage.setItem('theme', 'false');
        document.getElementById('dark-header').classList.remove('dark');
        document.getElementById('RDI-dark').classList.remove('dark');
        document.getElementById('login-dark').classList.remove('dark');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');


        // Section
        document.getElementById('dark-headline').classList.remove('dark-background');
        document.getElementById('dark-FH').classList.remove('dark-font');
        // Place
        document.getElementById('dark-place').classList.remove('dark-font-wh');
        document.getElementById('dark-gb-400').classList.remove('dark-select');
        // 
        document.getElementById('dark-filter1').style.fill = BCV_500;
        document.getElementById('dark-filter').classList.remove('filter-dark');
        // 
        document.getElementById('white-dark').classList.remove('darkw-icon-bg');
        // Show
        document.getElementById('show-dark').style.background = PCV_500;
        document.getElementById('dark-bg-show').style.color = WHCV_500;
        // Item
        document.getElementById('dark-item').classList.remove('dark-item-shaw');
        document.getElementById('dark-item2').classList.remove('dark-item-shaw');
        // Item Title
        document.getElementById('title-dark').style.color = PCV_500;
        // Item Type Doc 
        document.getElementById('type-dark').style.backgroundColor = PCV_500;
        document.getElementById('type-title-drak').style.color = WHCV_500;
        // 
        document.getElementById('authors-dark').style.color = BCV_500;
        document.getElementById('date-dark').style.color = BCV_500;
        document.getElementById('descrip-dark').style.color = BCV_500;
        // Item Title2
        document.getElementById('title-dark2').style.color = PCV_500;
        // Item Type Doc 
        document.getElementById('type-dark2').style.backgroundColor = PCV_500;
        document.getElementById('type-title-dark2').style.color = WHCV_500;
        // 
        document.getElementById('authors-dark2').style.color = BCV_500;
        document.getElementById('date-dark2').style.color = BCV_500;
        document.getElementById('descrip-dark2').style.color = BCV_500;

        // Pagination
        document.getElementById('pagination-light').style.visibility = 'visible';
        document.getElementById('pagination-dark').style.visibility = 'hidden';

        // Filtros
        document.getElementById('show-f').classList.remove('bg-dark-b');
        document.getElementById('border-dark').classList.remove('border-dark');
        document.getElementById('select-f-1').classList.remove('select-dark');
        document.getElementById('select-f-2').classList.remove('select-dark');
        document.getElementById('input-dark').classList.remove('select1-dark');
        // buttons
        document.getElementById('button-dark').classList.remove('select-dark5');
        document.getElementById('button1-dark').classList.remove('border-white');
        // Icons
        document.getElementById('icon-dark').style.fill = SUCV_500;
        document.getElementById('icon1-dark').style.fill = DCV_500;
        document.getElementById('menos-dark').style.fill = WHCV_500;












        // Footer
        document.getElementById('dark-footer').classList.remove('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');

        // Etiqueeta a
        document.getElementById('dark-a1').classList.remove('dark-font');
        document.getElementById('dark-a2').classList.remove('dark-font');
        document.getElementById('dark-a3').classList.remove('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.remove('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = SCV_500;
        document.getElementById('dark-thel').style.fill = TCV_500;



    }


});





switchButton2.addEventListener('click', () => {
    // Ocultar moon
    switchButton.style.display = 'block';
    // Mostrar sol
    document.getElementById('sol').style.display = 'none';

    // Al clic quitamos el darkmode
    document.body.classList.remove('dark');



    // alert('no');

    if (document.body.classList.contains('dark')) {
        // Agregamos todas las clases necesarias al click
        localStorage.setItem('theme', 'true');

        // Header 
        document.getElementById('dark-header').classList.add('dark');
        document.getElementById('RDI-dark').classList.add('dark');
        document.getElementById('login-dark').classList.add('dark');
        document.getElementById('dark-Lhelp').classList.add('dark-font');

        // Section
        document.getElementById('dark-headline').classList.add('dark-background');
        document.getElementById('dark-FH').classList.add('dark-font');
        // Place
        document.getElementById('dark-place').classList.add('dark-font-wh');
        document.getElementById('dark-gb-400').classList.add('dark-select');
        document.getElementById('input-4c').style.background = BCV_400;
        document.getElementById('input-4c').style.color = WHCV_500;
        // 
        document.getElementById('dark-filter').classList.add('filter-dark');
        document.getElementById('dark-filter1').style.fill = WHCV_500;
        // 
        document.getElementById('white-dark').classList.add('darkw-icon-bg');
        // Show
        document.getElementById('show-dark').style.background = PCV_200;
        document.getElementById('dark-bg-show').style.color = BCV_500;
        // Item
        document.getElementById('dark-item').classList.add('dark-item-shaw');
        document.getElementById('dark-item2').classList.add('dark-item-shaw');
        // Item Title
        document.getElementById('title-dark').style.color = PCV_200;
        // Item Type Doc 
        document.getElementById('type-dark').style.backgroundColor = PCV_200;
        document.getElementById('type-title-drak').style.color = BCV_500;
        // 
        document.getElementById('authors-dark').style.color = WHCV_500;
        document.getElementById('date-dark').style.color = WHCV_500;
        document.getElementById('descrip-dark').style.color = WHCV_500;

        // Item Title 2
        document.getElementById('title-dark2').style.color = PCV_200;
        // Item Type Doc 
        document.getElementById('type-dark2').style.backgroundColor = PCV_200;
        document.getElementById('type-title-dark2').style.color = BCV_500;
        // 
        document.getElementById('authors-dark2').style.color = WHCV_500;
        document.getElementById('date-dark2').style.color = WHCV_500;
        document.getElementById('descrip-dark2').style.color = WHCV_500;

        // Pagination
        document.getElementById('pagination-light').style.visibility = 'hidden';
        document.getElementById('pagination-dark').style.visibility = 'visible';

        // Filtros
        document.getElementById('show-f').classList.add('bg-dark-b');
        document.getElementById('border-dark').classList.add('border-dark');
        document.getElementById('select-f-1').classList.add('select-dark');
        document.getElementById('select-f-2').classList.add('select-dark');
        document.getElementById('input-dark').classList.add('select1-dark');
        // buttons
        document.getElementById('button-dark').classList.add('select-dark5');
        document.getElementById('button1-dark').classList.add('border-white');
        // Icons
        document.getElementById('icon-dark').style.fill = SUCV_200;
        document.getElementById('icon1-dark').style.fill = DCV_200;
        document.getElementById('menos-dark').style.fill = BCV_500;







        // Footer
        document.getElementById('dark-footer').classList.add('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.add('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.add('dark-icon-bg');
        // Etiqueeta a
        document.getElementById('dark-a1').classList.add('dark-font');
        document.getElementById('dark-a2').classList.add('dark-font');
        document.getElementById('dark-a3').classList.add('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.add('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = WCV_700;
        document.getElementById('dark-thel').style.fill = TCV_700;







    } else {
        // Removemos todas las clases necesarias al click
        localStorage.setItem('theme', 'false');
        document.getElementById('dark-header').classList.remove('dark');
        document.getElementById('RDI-dark').classList.remove('dark');
        document.getElementById('login-dark').classList.remove('dark');
        document.getElementById('dark-Lhelp').classList.remove('dark-font');

        // Section
        document.getElementById('dark-headline').classList.remove('dark-background');
        document.getElementById('dark-FH').classList.remove('dark-font');
        // Place
        document.getElementById('dark-place').classList.remove('dark-font-wh');
        document.getElementById('dark-gb-400').classList.remove('dark-select');
        document.getElementById('input-4c').style.background = WHCV_500;
        document.getElementById('input-4c').style.color = BCV_500;
        // 
        document.getElementById('dark-filter').classList.remove('filter-dark');
        document.getElementById('dark-filter1').style.fill = BCV_500;
        // 
        document.getElementById('white-dark').classList.remove('darkw-icon-bg');
        // Show
        document.getElementById('show-dark').style.background = PCV_500;
        document.getElementById('dark-bg-show').style.color = WHCV_500;
        // Item
        document.getElementById('dark-item').classList.remove('dark-item-shaw');
        document.getElementById('dark-item2').classList.remove('dark-item-shaw');
        // Item Title
        document.getElementById('title-dark').style.color = PCV_500;
        // Item Type Doc 
        document.getElementById('type-dark').style.backgroundColor = PCV_500;
        document.getElementById('type-title-drak').style.color = WHCV_500;
        // 
        document.getElementById('authors-dark').style.color = BCV_500;
        document.getElementById('date-dark').style.color = BCV_500;
        document.getElementById('descrip-dark').style.color = BCV_500;
        // Item Title2
        document.getElementById('title-dark2').style.color = PCV_500;
        // Item Type Doc 
        document.getElementById('type-dark2').style.backgroundColor = PCV_500;
        document.getElementById('type-title-dark2').style.color = WHCV_500;
        // 
        document.getElementById('authors-dark2').style.color = BCV_500;
        document.getElementById('date-dark2').style.color = BCV_500;
        document.getElementById('descrip-dark2').style.color = BCV_500;

        // Pagination
        document.getElementById('pagination-light').style.visibility = 'visible';
        document.getElementById('pagination-dark').style.visibility = 'hidden';

        // Filtros
        document.getElementById('show-f').classList.remove('bg-dark-b');
        document.getElementById('border-dark').classList.remove('border-dark');
        document.getElementById('select-f-1').classList.remove('select-dark');
        document.getElementById('select-f-2').classList.remove('select-dark');
        document.getElementById('input-dark').classList.remove('select1-dark');
        // buttons
        document.getElementById('button-dark').classList.remove('select-dark5');
        document.getElementById('button1-dark').classList.remove('border-white');
        // Icons
        document.getElementById('icon-dark').style.fill = SUCV_500;
        document.getElementById('icon1-dark').style.fill = DCV_500;
        document.getElementById('menos-dark').style.fill = WHCV_500;





        // Footer
        document.getElementById('dark-footer').classList.remove('dark-background');
        // Icon Footer
        document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
        document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');
        // Etiqueeta a
        document.getElementById('dark-a1').classList.remove('dark-font');
        document.getElementById('dark-a2').classList.remove('dark-font');
        document.getElementById('dark-a3').classList.remove('dark-font');
        // Copy R
        document.getElementById('dark-copy').classList.remove('dark-font');
        // Icons Contactenos
        document.getElementById('dark-messa').style.fill = SCV_500;
        document.getElementById('dark-thel').style.fill = TCV_500;





    }


});








// Trabajamos el localstorage para que al actualizar no se cambie

if (localStorage.getItem('theme') == 'true') {
    // Ocultar moon
    switchButton.style.display = 'none';
    // Mostrar sol
    document.getElementById('sol').style.display = 'block';


    // Agregamos al cargar valores del localstorage
    document.body.classList.toggle('dark');

    // Header
    document.getElementById('dark-header').classList.add('dark');
    document.getElementById('RDI-dark').classList.add('dark');
    document.getElementById('login-dark').classList.add('dark');
    document.getElementById('dark-Lhelp').classList.add('dark-font');




    // Section
    document.getElementById('dark-headline').classList.add('dark-background');
    document.getElementById('dark-FH').classList.add('dark-font');
    // Place
    document.getElementById('dark-place').classList.add('dark-font-wh');
    document.getElementById('dark-gb-400').classList.add('dark-select');
    document.getElementById('input-4c').style.background = BCV_400;
    document.getElementById('input-4c').style.color = WHCV_500;
    // 
    document.getElementById('dark-filter').classList.add('filter-dark');
    document.getElementById('dark-filter1').style.fill = WHCV_500;
    // 
    document.getElementById('white-dark').classList.add('darkw-icon-bg');
    // Show
    document.getElementById('show-dark').style.background = PCV_200;
    document.getElementById('dark-bg-show').style.color = BCV_500;
    // Item
    document.getElementById('dark-item').classList.add('dark-item-shaw');
    document.getElementById('dark-item2').classList.add('dark-item-shaw');
    // Item Title
    document.getElementById('title-dark').style.color = PCV_200;
    // Item Type Doc 
    document.getElementById('type-dark').style.backgroundColor = PCV_200;
    document.getElementById('type-title-drak').style.color = BCV_500;
    // 
    document.getElementById('authors-dark').style.color = WHCV_500;
    document.getElementById('date-dark').style.color = WHCV_500;
    document.getElementById('descrip-dark').style.color = WHCV_500;

    // Item Title 2
    document.getElementById('title-dark2').style.color = PCV_200;
    // Item Type Doc 
    document.getElementById('type-dark2').style.backgroundColor = PCV_200;
    document.getElementById('type-title-dark2').style.color = BCV_500;
    // 
    document.getElementById('authors-dark2').style.color = WHCV_500;
    document.getElementById('date-dark2').style.color = WHCV_500;
    document.getElementById('descrip-dark2').style.color = WHCV_500;

    // Pagination
    document.getElementById('pagination-light').style.visibility = 'hidden';
    document.getElementById('pagination-dark').style.visibility = 'visible';

    // Filtros
    document.getElementById('show-f').classList.add('bg-dark-b');
    document.getElementById('border-dark').classList.add('border-dark');
    document.getElementById('select-f-1').classList.add('select-dark');
    document.getElementById('select-f-2').classList.add('select-dark');
    document.getElementById('input-dark').classList.add('select1-dark');
    // buttons
    document.getElementById('button-dark').classList.add('select-dark5');
    document.getElementById('button1-dark').classList.add('border-white');
    // Icons
    document.getElementById('icon-dark').style.fill = SUCV_200;
    document.getElementById('icon1-dark').style.fill = DCV_200;
    document.getElementById('menos-dark').style.fill = BCV_500;







    // Footer
    document.getElementById('dark-footer').classList.add('dark-background');
    // Icon Footer
    document.getElementById('dark-doc-foot').classList.add('dark-icon-bg');
    document.getElementById('dark-doc1-foot').classList.add('dark-icon-bg');
    document.getElementById('dark-doc2-foot').classList.add('dark-icon-bg');
    // Etiqueeta a
    document.getElementById('dark-a1').classList.add('dark-font');
    document.getElementById('dark-a2').classList.add('dark-font');
    document.getElementById('dark-a3').classList.add('dark-font');
    // Copy R
    document.getElementById('dark-copy').classList.add('dark-font');
    // Icons Contactenos
    document.getElementById('dark-messa').style.fill = WCV_700;
    document.getElementById('dark-thel').style.fill = TCV_700;








} else {
    // Ocultar moon
    switchButton.style.display = 'block';
    // Mostrar sol
    document.getElementById('sol').style.display = 'none';


    // Quitamos al cargar valores del localstorage
    document.body.classList.remove('dark');
    document.getElementById('dark-header').classList.remove('dark');
    document.getElementById('RDI-dark').classList.remove('dark');
    document.getElementById('login-dark').classList.remove('dark');
    document.getElementById('dark-Lhelp').classList.remove('dark-font');

    // Section
    document.getElementById('dark-headline').classList.remove('dark-background');
    document.getElementById('dark-FH').classList.remove('dark-font');
    // Place
    document.getElementById('dark-place').classList.remove('dark-font-wh');
    document.getElementById('dark-gb-400').classList.remove('dark-select');
    document.getElementById('input-4c').style.background = WHCV_500;
    document.getElementById('input-4c').style.color = BCV_500;
    // 
    document.getElementById('dark-filter').classList.remove('filter-dark');
    document.getElementById('dark-filter1').style.fill = BCV_500;
    // 
    document.getElementById('white-dark').classList.remove('darkw-icon-bg');
    // Show
    document.getElementById('show-dark').style.background = PCV_500;
    document.getElementById('dark-bg-show').style.color = WHCV_500;
    // Item
    document.getElementById('dark-item').classList.remove('dark-item-shaw');
    document.getElementById('dark-item2').classList.remove('dark-item-shaw');
    // Item Title
    document.getElementById('title-dark').style.color = PCV_500;
    // Item Type Doc 
    document.getElementById('type-dark').style.backgroundColor = PCV_500;
    document.getElementById('type-title-drak').style.color = WHCV_500;
    // 
    document.getElementById('authors-dark').style.color = BCV_500;
    document.getElementById('date-dark').style.color = BCV_500;
    document.getElementById('descrip-dark').style.color = BCV_500;
    // Item Title2
    document.getElementById('title-dark2').style.color = PCV_500;
    // Item Type Doc 
    document.getElementById('type-dark2').style.backgroundColor = PCV_500;
    document.getElementById('type-title-dark2').style.color = WHCV_500;
    // 
    document.getElementById('authors-dark2').style.color = BCV_500;
    document.getElementById('date-dark2').style.color = BCV_500;
    document.getElementById('descrip-dark2').style.color = BCV_500;


    // Pagination
    document.getElementById('pagination-light').style.visibility = 'visible';
    document.getElementById('pagination-dark').style.visibility = 'hidden';

    // Filtros
    document.getElementById('show-f').classList.remove('bg-dark-b');
    document.getElementById('border-dark').classList.remove('border-dark');
    document.getElementById('select-f-1').classList.remove('select-dark');
    document.getElementById('select-f-2').classList.remove('select-dark');
    document.getElementById('input-dark').classList.remove('select1-dark');
    // buttons
    document.getElementById('button-dark').classList.remove('select-dark5');
    document.getElementById('button1-dark').classList.remove('border-white');
    // Icons
    document.getElementById('icon-dark').style.fill = SUCV_500;
    document.getElementById('icon1-dark').style.fill = DCV_500;
    document.getElementById('menos-dark').style.fill = WHCV_500;








    // Footer
    document.getElementById('dark-footer').classList.remove('dark-background');
    // Icon Footer
    document.getElementById('dark-doc-foot').classList.remove('dark-icon-bg');
    document.getElementById('dark-doc1-foot').classList.remove('dark-icon-bg');
    document.getElementById('dark-doc2-foot').classList.remove('dark-icon-bg');
    // Etiqueeta a
    document.getElementById('dark-a1').classList.remove('dark-font');
    document.getElementById('dark-a2').classList.remove('dark-font');
    document.getElementById('dark-a3').classList.remove('dark-font');
    // Copy R
    document.getElementById('dark-copy').classList.remove('dark-font');
    // Icons Contactenos
    document.getElementById('dark-messa').style.fill = SCV_500;
    document.getElementById('dark-thel').style.fill = TCV_500;





}