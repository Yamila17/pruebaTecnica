import Swal from 'sweetalert2';

export const CustomSweetAlertOk = (message) => {
    Swal.fire({
        icon: 'success',
        title: 'OK',
        text: message,
        iconColor: '#00B1E2',
        confirmButtonText: 'OK',
        customClass: {
            confirmButton: 'custom-button-sw',
            title: 'custom-title',
            content: 'custom-content'
        }
    });
};

export const CustomSweetAlertError = (message) => {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
        iconColor: '#E95111',
        confirmButtonText: 'OK',
        customClass: {
            confirmButton: 'custom-button-sw',
            title: 'custom-title',
            content: 'custom-content'
        }
    });
};