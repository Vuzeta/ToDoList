$(document).ready(function () {
    $('.btn').on("click", function () {
        const newRequest = $('.form-control').val();
        let question = prompt("Kiedy zadanie ma zostać wykonane?");
        $('tbody').append(`<tr>
                        <th scope="row">${question}</th>
                        <td>${newRequest}</td>
                        <td>
                        <button type="button" class="btn btn-success px-3">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true">
                        </i>
                        </button>
                        <button type="button" class="btn btn-danger px-3">
                        <i class="fa fa-remove" aria-hidden="true">
                        </i>
                        </button>
                        </td>
                        </tr>`);
    });
});
