
$(() => {
    $('#addHome').removeClass('btn-danger').addClass('btn-success');
    $('h1').addClass('text-center');

    var $newLink = $('<br><br><a target="_blank" id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>');
    $newLink.appendTo('body');

    $('#zillowLink').attr('target', '_blank');
    console.log($('#zillowLink').attr('href'));


    var newHomes = [
        { address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500" },
        { address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000" },
        { address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900" },
        { address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000" }
    ];

    $('#addHome').on('click', ($event) => {

        const homeToAdd = newHomes[0];
        const $newHome = $('<tr></tr>')
        $newHome.append(`<td>${homeToAdd.address}</td>`)
        $newHome.append(`<td>${homeToAdd.sf}</td>`)
        $newHome.append(`<td>${homeToAdd.bedrooms}</td>`)
        $newHome.append(`<td>${homeToAdd.baths}</td>`)
        $newHome.append(`<td>${homeToAdd.price}</td>`)
        $newHome.append(`<td><button class="btn btn-xs btn-danger">Remove</button></td>`)

        $('#homes tbody').append($newHome);

        newHomes.splice(0, 1);

        if (newHomes.length === 0) {
            $('#addHome').prop('disabled', true);
        }

    });



    const removeHome = ($event) => {
        $($event.currentTarget).fadeOut(500, () => {
            $($event.currentTarget).remove();
        });
    }
    $('#homes tbody').on('click', 'tr', removeHome);

    var cells = $('#homes thead tr').children();
    cells.eq(0).css('color', 'blue');
    cells.eq(4).css('color', 'green');

});


/*
$(function(){
    $("#addHome").removeClass('btn-danger').addClass('btn-success');
    $("h1").addClass("text-center");

    var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
    $newLink.appendTo('body');
    $('#zillowLink').attr( "target", "_blank" );
    console.log($("#zillowLink").attr("href"));

//Make newhomes an HTML element
//Attach newHomes to button

    let newHomes = [
        {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
        {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
        {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
        {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
    ];


    $('#addHome').on("click", ($event) => {

        if (newHomes !== 0){
            let $newHome = $(`<tr><td>${newHomes[0].address}</td>`
                            +`<td>${newHomes[0].sf}</td>`
                            +`<td>${newHomes[0].bedrooms}</td>`
                            +`<td>${newHomes[0].baths}</td>`
                            +`<td>${newHomes[0].price}</td>`
                            +`<td><button class="btn btn-xs btn-danger">Remove</button></td></tr>`);
            $newHome.appendTo('tbody');
            newhomes.shift();
        }

        
    });
    
    const removeHome = ($event) => {
        $($event.currentTarget).fadeOut(500,() => {
            $($event.currentTarget).remove();      
          });        
    }
    $('#homes tbody').on('click', 'tr', removeHome);

    var cells = $('#homes thead tr').children();
    cells.eq(0).css('color', 'blue');
    cells.eq(4).css('color', 'green');



});

*/

