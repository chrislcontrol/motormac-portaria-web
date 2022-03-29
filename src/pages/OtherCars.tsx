import React from "react";

export default function () {
    return React.createElement('div', { 'id': 'wrapper' }, React.createElement('nav', { 'className': 'navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0' }, React.createElement('div', { 'className': 'container-fluid d-flex flex-column p-0' }, React.createElement('a', {
        'className': 'navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0',
        'href': '#'
    }, React.createElement('div', { 'className': 'sidebar-brand-icon rotate-n-15' }, React.createElement('i', { 'className': 'fas fa-laugh-wink' })), React.createElement('div', { 'className': 'sidebar-brand-text mx-3' }, React.createElement('span', {}, 'PORTARIA'))), React.createElement('hr', { 'className': 'sidebar-divider my-0' }), React.createElement('ul', {
        'className': 'navbar-nav text-light',
        'id': 'accordionSidebar'
    }, React.createElement('li', { 'className': 'nav-item' }), React.createElement('li', { 'className': 'nav-item' }, React.createElement('a', {
        'className': 'nav-link',
        'href': 'internos'
    }, React.createElement('i', { 'className': 'fas fa-table' }), React.createElement('span', {}, 'Entrada'), '/ Saída de internos'), React.createElement('a', {
        'className': 'nav-link active',
        'href': 'externos'
    }, React.createElement('i', { 'className': 'fas fa-user' }), React.createElement('span', {}, 'Entrada/ Saída de terceiros'))), React.createElement('li', { 'className': 'nav-item' }), React.createElement('li', { 'className': 'nav-item' }), React.createElement('li', { 'className': 'nav-item' })), React.createElement('div', { 'className': 'text-center d-none d-md-inline' }))), React.createElement('div', {
        'className': 'd-flex flex-column',
        'id': 'content-wrapper'
    }, React.createElement('div', { 'id': 'content' }, React.createElement('nav', { 'className': 'navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top' }, React.createElement('div', { 'className': 'container-fluid' }, React.createElement('button', {
        'className': 'btn btn-link d-md-none rounded-circle me-3',
        'id': 'sidebarToggleTop',
        'type': 'button'
    }, React.createElement('i', { 'className': 'fas fa-bars' })), React.createElement('form', { 'className': 'd-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search' }, React.createElement('div', { 'className': 'input-group' })), React.createElement('ul', { 'className': 'navbar-nav flex-nowrap ms-auto' }, React.createElement('li', { 'className': 'nav-item dropdown d-sm-none no-arrow' }, React.createElement('a', {
        'className': 'dropdown-toggle nav-link',
        'aria-expanded': 'false',
        'data-bs-toggle': 'dropdown',
        'href': '#'
    }, React.createElement('i', { 'className': 'fas fa-search' })), React.createElement('div', {
        'className': 'dropdown-menu dropdown-menu-end p-3 animated--grow-in',
        'aria-labelledby': 'searchDropdown'
    }, React.createElement('form', { 'className': 'me-auto navbar-search w-100' }, React.createElement('div', { 'className': 'input-group' }, React.createElement('input', {
        'className': 'bg-light form-control border-0 small',
        'type': 'text',
        'placeholder': 'Search for ...'
    }), React.createElement('div', { 'className': 'input-group-append' }, React.createElement('button', {
        'className': 'btn btn-primary py-0',
        'type': 'button'
    }, React.createElement('i', { 'className': 'fas fa-search' }))))))), React.createElement('li', { 'className': 'nav-item dropdown no-arrow mx-1' }, React.createElement('div', { 'className': 'nav-item dropdown no-arrow' }, React.createElement('a', {
        'className': 'dropdown-toggle nav-link',
        'aria-expanded': 'false',
        'data-bs-toggle': 'dropdown',
        'href': '#'
    }), React.createElement('div', { 'className': 'dropdown-menu dropdown-menu-end dropdown-list animated--grow-in' }, React.createElement('h6', { 'className': 'dropdown-header' }, 'alerts center'), React.createElement('a', {
        'className': 'dropdown-item d-flex align-items-center',
        'href': '#'
    }, React.createElement('div', { 'className': 'me-3' }, React.createElement('div', { 'className': 'bg-primary icon-circle' }, React.createElement('i', { 'className': 'fas fa-file-alt text-white' }))), React.createElement('div', {}, React.createElement('span', { 'className': 'small text-gray-500' }, 'December 12, 2019'), React.createElement('p', {}, 'A new monthly report is ready to download!'))), React.createElement('a', {
        'className': 'dropdown-item d-flex align-items-center',
        'href': '#'
    }, React.createElement('div', { 'className': 'me-3' }, React.createElement('div', { 'className': 'bg-success icon-circle' }, React.createElement('i', { 'className': 'fas fa-donate text-white' }))), React.createElement('div', {}, React.createElement('span', { 'className': 'small text-gray-500' }, 'December 7, 2019'), React.createElement('p', {}, '$290.29 has been deposited into your account!'))), React.createElement('a', {
        'className': 'dropdown-item d-flex align-items-center',
        'href': '#'
    }, React.createElement('div', { 'className': 'me-3' }, React.createElement('div', { 'className': 'bg-warning icon-circle' }, React.createElement('i', { 'className': 'fas fa-exclamation-triangle text-white' }))), React.createElement('div', {}, React.createElement('span', { 'className': 'small text-gray-500' }, 'December 2, 2019'), React.createElement('p', {}, 'Spending Alert: We\'ve noticed unusually high spending for your account.'))), React.createElement('a', {
        'className': 'dropdown-item text-center small text-gray-500',
        'href': '#'
    }, 'Show All Alerts')))), React.createElement('li', { 'className': 'nav-item dropdown no-arrow mx-1' }, React.createElement('div', { 'className': 'nav-item dropdown no-arrow' }, React.createElement('a', {
        'className': 'dropdown-toggle nav-link',
        'aria-expanded': 'false',
        'data-bs-toggle': 'dropdown',
        'href': '#'
    }), React.createElement('div', { 'className': 'dropdown-menu dropdown-menu-end dropdown-list animated--grow-in' }, React.createElement('h6', { 'className': 'dropdown-header' }, 'alerts center'), React.createElement('a', {
        'className': 'dropdown-item d-flex align-items-center',
        'href': '#'
    }, React.createElement('div', { 'className': 'dropdown-list-image me-3' }, React.createElement('img', {
        'className': 'rounded-circle',
        'src': 'assets/img/avatars/avatar4.jpeg'
    }), React.createElement('div', { 'className': 'bg-success status-indicator' })), React.createElement('div', { 'className': 'fw-bold' }, React.createElement('div', { 'className': 'text-truncate' }, React.createElement('span', {}, 'Hi there! I am wondering if you can help me with a problem I\'ve been having.')), React.createElement('p', { 'className': 'small text-gray-500 mb-0' }, 'Emily Fowler - 58m'))), React.createElement('a', {
        'className': 'dropdown-item d-flex align-items-center',
        'href': '#'
    }, React.createElement('div', { 'className': 'dropdown-list-image me-3' }, React.createElement('img', {
        'className': 'rounded-circle',
        'src': 'assets/img/avatars/avatar2.jpeg'
    }), React.createElement('div', { 'className': 'status-indicator' })), React.createElement('div', { 'className': 'fw-bold' }, React.createElement('div', { 'className': 'text-truncate' }, React.createElement('span', {}, 'I have the photos that you ordered last month!')), React.createElement('p', { 'className': 'small text-gray-500 mb-0' }, 'Jae Chun - 1d'))), React.createElement('a', {
        'className': 'dropdown-item d-flex align-items-center',
        'href': '#'
    }, React.createElement('div', { 'className': 'dropdown-list-image me-3' }, React.createElement('img', {
        'className': 'rounded-circle',
        'src': 'assets/img/avatars/avatar3.jpeg'
    }), React.createElement('div', { 'className': 'bg-warning status-indicator' })), React.createElement('div', { 'className': 'fw-bold' }, React.createElement('div', { 'className': 'text-truncate' }, React.createElement('span', {}, 'Last month\'s report looks great, I am very happy with the progress so far, keep up the good work!')), React.createElement('p', { 'className': 'small text-gray-500 mb-0' }, 'Morgan Alvarez - 2d'))), React.createElement('a', {
        'className': 'dropdown-item d-flex align-items-center',
        'href': '#'
    }, React.createElement('div', { 'className': 'dropdown-list-image me-3' }, React.createElement('img', {
        'className': 'rounded-circle',
        'src': 'assets/img/avatars/avatar5.jpeg'
    }), React.createElement('div', { 'className': 'bg-success status-indicator' })), React.createElement('div', { 'className': 'fw-bold' }, React.createElement('div', { 'className': 'text-truncate' }, React.createElement('span', {}, 'Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren\'t good...')), React.createElement('p', { 'className': 'small text-gray-500 mb-0' }, 'Chicken the Dog \xB7 2w'))), React.createElement('a', {
        'className': 'dropdown-item text-center small text-gray-500',
        'href': '#'
    }, 'Show All Alerts'))), React.createElement('div', {
        'className': 'shadow dropdown-list dropdown-menu dropdown-menu-end',
        'aria-labelledby': 'alertsDropdown'
    })), React.createElement('div', { 'className': 'd-none d-sm-block topbar-divider' }), React.createElement('li', { 'className': 'nav-item dropdown no-arrow' }, React.createElement('div', { 'className': 'nav-item dropdown no-arrow' }, React.createElement('a', {
        'className': 'dropdown-toggle nav-link',
        'aria-expanded': 'false',
        'data-bs-toggle': 'dropdown',
        'href': '#'
    }, React.createElement('span', { 'className': 'd-none d-lg-inline me-2 text-gray-600 small' }, 'Valerie Luna')), React.createElement('div', { 'className': 'dropdown-menu shadow dropdown-menu-end animated--grow-in' }, React.createElement('a', {
        'className': 'dropdown-item',
        'href': '#'
    }, React.createElement('i', { 'className': 'fas fa-user fa-sm fa-fw me-2 text-gray-400' }), '\xA0Profile'), React.createElement('a', {
        'className': 'dropdown-item',
        'href': '#'
    }, React.createElement('i', { 'className': 'fas fa-cogs fa-sm fa-fw me-2 text-gray-400' }), '\xA0Settings'), React.createElement('a', {
        'className': 'dropdown-item',
        'href': '#'
    }, React.createElement('i', { 'className': 'fas fa-list fa-sm fa-fw me-2 text-gray-400' }), '\xA0Activity log'), React.createElement('div', { 'className': 'dropdown-divider' }), React.createElement('a', {
        'className': 'dropdown-item',
        'href': '#'
    }, React.createElement('i', { 'className': 'fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400' }), '\xA0Logout'))))))), React.createElement('button', {
        'className': 'btn btn-primary',
        'id': 'btn-insert-other-cars',
        'type': 'submit',
        'style': {
            margin: '20px',
            padding: '7px 21px',
            height: '37px'
        }
    }, 'Dar entrada em veículo'), React.createElement('div', { 'className': 'container-fluid' }, React.createElement('h3', { 'className': 'text-dark mb-4' }, 'Veículos externos'), React.createElement('div', { 'className': 'card shadow' }, React.createElement('div', { 'className': 'card-header py-3' }, React.createElement('p', { 'className': 'text-primary m-0 fw-bold' }, 'Veículos externos estacionados')), React.createElement('div', { 'className': 'card-body' }, React.createElement('div', { 'className': 'row' }, React.createElement('div', { 'className': 'col-md-6 text-nowrap' }, React.createElement('div', {
        'id': 'dataTable_length',
        'className': 'dataTables_length',
        'aria-controls': 'dataTable'
    }, React.createElement('label', { 'className': 'form-label' }, 'Mostrar\xA0', React.createElement('select', { 'className': 'd-inline-block form-select form-select-sm' }, React.createElement('option', {
        'value': '10',
        'selected': true
    }, '10'), React.createElement('option', { 'value': '25' }, '25'), React.createElement('option', { 'value': '50' }, '50'), React.createElement('option', { 'value': '100' }, '100')), '\xA0'))), React.createElement('div', { 'className': 'col-md-6' }, React.createElement('div', {
        'className': 'text-md-end dataTables_filter',
        'id': 'dataTable_filter'
    }, React.createElement('label', { 'className': 'form-label' }, React.createElement('input', {
        'type': 'search',
        'className': 'form-control form-control-sm',
        'aria-controls': 'dataTable',
        'placeholder': 'Procurar placa'
    }))))), React.createElement('div', {
        'className': 'table-responsive table mt-2',
        'id': 'dataTable',
        'role': 'grid',
        'aria-describedby': 'dataTable_info'
    }, React.createElement('table', {
        'className': 'table my-0',
        'id': 'dataTable'
    }, React.createElement('thead', {}, React.createElement('tr', {}, React.createElement('th', {}, 'Placa'), React.createElement('th', {}, 'Motorista'), React.createElement('th', {}, 'Data e hora de entrada'))), React.createElement('tbody', {}, React.createElement('tr', {}, React.createElement('td', {}, 'Airi Satou'), React.createElement('td', {}, 'Accountant'), React.createElement('td', {}, 'Tokyo')), React.createElement('tr', {}, React.createElement('td', {}, 'Angelica Ramos'), React.createElement('td', {}, 'Chief Executive Officer(CEO)'), React.createElement('td', {}, 'London')), React.createElement('tr', {}, React.createElement('td', {}, 'Ashton Cox'), React.createElement('td', {}, 'Junior Technical Author'), React.createElement('td', {}, 'San Francisco')), React.createElement('tr', {}, React.createElement('td', {}, 'Bradley Greer'), React.createElement('td', {}, 'Software Engineer'), React.createElement('td', {}, 'London')), React.createElement('tr', {}, React.createElement('td', {}, 'Brenden Wagner'), React.createElement('td', {}, 'Software Engineer'), React.createElement('td', {}, 'San Francisco')), React.createElement('tr', {}, React.createElement('td', {}, 'Brielle Williamson'), React.createElement('td', {}, 'Integration Specialist'), React.createElement('td', {}, 'New York')), React.createElement('tr', {}, React.createElement('td', {}, 'Bruno Nash', React.createElement('br', {})), React.createElement('td', {}, 'Software Engineer'), React.createElement('td', {}, 'London')), React.createElement('tr', {}, React.createElement('td', {}, 'Caesar Vance'), React.createElement('td', {}, 'Pre-Sales Support'), React.createElement('td', {}, 'New York')), React.createElement('tr', {}, React.createElement('td', {}, 'Cara Stevens'), React.createElement('td', {}, 'Sales Assistant'), React.createElement('td', {}, 'New York')), React.createElement('tr', {}, React.createElement('td', {}, 'Cedric Kelly'), React.createElement('td', {}, 'Senior JavaScript Developer'), React.createElement('td', {}, 'Edinburgh'))), React.createElement('tfoot', {}, React.createElement('tr', {}, React.createElement('td', {}), React.createElement('td', {}))))), React.createElement('div', { 'className': 'row' }, React.createElement('div', { 'className': 'col-md-6 align-self-center' }, React.createElement('p', {
        'id': 'dataTable_info',
        'className': 'dataTables_info',
        'role': 'status',
        'aria-live': 'polite'
    }, 'Showing 1 to 10 of 27')), React.createElement('div', { 'className': 'col-md-6' }, React.createElement('nav', { 'className': 'd-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers' }, React.createElement('ul', { 'className': 'pagination' }, React.createElement('li', { 'className': 'page-item disabled' }, React.createElement('a', {
        'className': 'page-link',
        'href': '#',
        'aria-label': 'Previous'
    }, React.createElement('span', { 'aria-hidden': 'true' }, '\xAB'))), React.createElement('li', { 'className': 'page-item active' }, React.createElement('a', {
        'className': 'page-link',
        'href': '#'
    }, '1')), React.createElement('li', { 'className': 'page-item' }, React.createElement('a', {
        'className': 'page-link',
        'href': '#'
    }, '2')), React.createElement('li', { 'className': 'page-item' }, React.createElement('a', {
        'className': 'page-link',
        'href': '#'
    }, '3')), React.createElement('li', { 'className': 'page-item' }, React.createElement('a', {
        'className': 'page-link',
        'href': '#',
        'aria-label': 'Next'
    }, React.createElement('span', { 'aria-hidden': 'true' }, '\xBB'))))))))))), React.createElement('footer', { 'className': 'bg-white sticky-footer' }, React.createElement('div', { 'className': 'container my-auto' }, React.createElement('div', { 'className': 'text-center my-auto copyright' }, React.createElement('span', {}, 'Copyright \xA9 Brand 2022'))))), React.createElement('a', {
        'className': 'border rounded d-inline scroll-to-top',
        'href': '#page-top'
    }, React.createElement('i', { 'className': 'fas fa-angle-up' })));
};