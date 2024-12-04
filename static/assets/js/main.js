const dataset = document.currentScript.dataset;
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
const menuBar = document.querySelector('#content nav i');
const sidebar = document.getElementById('sidebar');
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});

allSideMenu.forEach(function (item) {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(function (i) {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    });
});

if (window.innerWidth < 768 || sessionStorage.getItem('isClosed') === 'true') {
    sidebar.classList.add('hide');
}
menuBar.addEventListener('click', function () {
    const side = sidebar.classList.toggle('hide');
    sessionStorage.setItem('isClosed', side);
});

document.addEventListener("DOMContentLoaded", function () {
    const url = window.location;
    const navLinks = document.querySelectorAll('.side-menu li.nav-link a');
    navLinks.forEach(function (link) {
        if (link.href === url.origin + url.pathname) {
            link.parentNode.classList.add('active');
        }
    });

    let breadcrumb = $('ul.breadcrumb');
    let path = window.location.pathname.slice(7).split('/');
    path = path.filter(function (i) {
        return !(/\d+/g.test(i) || i === '');
    });

    for (const [index, element] of path.entries()) {
        if (/\d+/g.test(element) || element === '') continue;

        if (index !== 0) {
            breadcrumb.append(`<li class="breadcrumb-font"><i class="fa-solid fa-chevron-right text-dark p-1"></i></li>`);
        }

        let isLast = (path.length - 1 === index) ? 'active' : '';
        breadcrumb.append(`<li><a href="#" class="nav-link ${isLast} breadcrumb-font">${element.toUpperCase()}</a></li>`);
    }

    $('.add-select2').select2({theme: 'bootstrap-5'});
});

function show_error_msg(ids, error) {
    if (ids && error) {
        $.each(error, function (key1, val1) {
            let html = '';
            $.each(val1, function (key2, val2) {
                html += '<label class="error">' + val2 + '</label>';
            });
            $(ids + key1).after(html);
        });
    }
}