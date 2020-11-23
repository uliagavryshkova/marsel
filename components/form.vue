<template>
    <form class="form" id="form">
        <div class="form__success">
            <h5>Хорошего времени суток</h5>
            <span>Спасибо</span>
            <span>Ваш заказ принят</span>
            <span>Администратор с Вами свяжется</span>
            <span>для подтверждения заказа</span>                
        </div>
        <div class="form__box">
            <label></label>
            <input class="datepicker-here" placeholder="Выберите дату" type="text" data-position="bottom center"/>
        </div>
        <div class="form__option">
            <span class="form__option-select" id="time">Выберите время</span>
            <ul class="form__option-list time">
                <li>11:00</li>
                <li>12:00</li>
                <li>13:00</li>
                <li>14:00</li>
                <li>15:00</li>
                <li>16:00</li>
                <li>17:00</li>
                <li>18:00</li>
                <li>19:00</li>
                <li>20:00</li>
                <li>21:00</li>
                <li>22:00</li>
            </ul>
        </div>            
        <div class="form__option">
            <span class="form__option-select" id="people">Количество человек</span>
            <ul class="form__option-list people">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul>
        </div>
        <div class="form__box">
            <label for="name" id="errorName">Введите Ваше Имя</label>
            <input v-model="name" placeholder="Ваше имя" type="text" id="name" name="name">
        </div>
        <div class="form__box">
            <label for="phone" id="errorPhone">Введите Ваш телефон</label>
            <input v-model="phone" placeholder="Ваш телефон" type="text" id="phone" name="phone">
        </div>            
        <div class="form__box form__box--email">
            <label for="email" id="errorEmail"></label>
            <input placeholder="Ваш e-mail" type="email" name="email">
        </div>
        <span @click="request('order')" class="info__link">Заказать</span>
    </form>
</template>
<script>
export default {
    methods: {
        request(exp) { 
            if (this.name && this.phone) {                 
                // console.log('ok')

                var form = document.querySelector('.form')
                form.className += " success"

                var formsChild = form.childNodes
                if (formsChild != null) {
                    for(var i=1 ; i<formsChild.length ; i++){
                        formsChild[i].className += " hidden"
                    }                        
                }
            } else {                
                if (this.phone === '') {             
                    var labelPhone = document.getElementById("errorPhone")
                    if (!labelPhone.classList.contains('active')) {
                        labelPhone.className += " active"
                    }                    
                    var inputPhone = document.getElementById("phone")
                    inputPhone.focus()
                } 
                if (this.name === '') { 
                    console.log('name')               
                    var labelName = document.getElementById("errorName")
                    if (!labelName.classList.contains('active')) {
                        labelName.className += " active"
                    }                    
                    var inputName = document.getElementById("name")
                    inputName.focus()
                }  
                // if (this.date === '') {             
                //     var labelDate = document.getElementById("errorDate")
                //     if (!labelDate.classList.contains('active')) {
                //         labelDate.className += " active"
                //     }                    
                //     var inputDate = document.getElementById("date")
                //     inputDate.focus()
                // }             
            }
        }
    },
    mounted(){

        // var opt = document.querySelectorAll('.form__option')

        // document.getElementById('form').onclick = function(e) {
        //     for(var i=0 ; i<opt.length ; i++){
        //         // option[i].addEventListener('click', proc, true);
        //         // if(e.target != option[i]  && e.target.closest != option[i]) {
        //         if(e.target != option[i]) {
        //             console.log('You clicked outside.')    
        //             option[i].classList.remove('active')      
        //         } else {
        //             console.log('Display Contents')   
        //         }
        //     }
            
        // }



        $('.datepicker-here').datepicker({
            autoClose: true
        });
        var datepicker = $('.datepicker-here').datepicker().data('datepicker');
        // Обновление одного параметра
        datepicker.update('minDate', new Date())

        function process(e){
            // console.log(this)
            // for(var i=0 ; i<option.length ; i++){            
            //    option[i].classList.remove('active')
            //    console.log('fff')
            // }
            
            this.classList.toggle('active')
        }
        function processEvent(e){
            let parent = this.parentNode,
                hasClass = parent.classList.contains('time'),
                name = this.innerHTML
            if (hasClass == true){
                document.getElementById('time').innerHTML = name
            }else{
                document.getElementById('people').innerHTML = name
            }
            parent.classList.remove('active')
        }
        var el = document.querySelectorAll('.form__option-list > li');
        if (el != null) {
            for(var i=0 ; i<el.length ; i++){
                el[i].addEventListener('click', processEvent, false);
            }                
        }
        var option = document.querySelectorAll('.form__option')
        if (option != null) {
            for(var i=0 ; i<option.length ; i++){
                option[i].addEventListener('click', process, false);
            }
                
        }

        // // function clickOutside(e){
        // //     // console.log(this)
        // //     for(var i=1; i<form.length ; i++){            
        // //        form[i].classList.remove('active')
        // //     }
        // // }

        // // var form = document.querySelectorAll('.form')
        // // if (form != null) {
        // //     for(var i=1; i<form.length ; i++){
        // //         form[i].addEventListener('click', clickOutside, true);
        // //     }
                
        // // }

        // function proc(e){
        //     // console.log(this)
        //     for(var i=0 ; i<options.length ; i++){            
        //        options[i].classList.remove('active')
        //        console.log('fff')
        //     }
        //     this.classList.toggle('active')
        //     // this.classList.add('active')
        //     // if (!e.target.closest('options[i]')) {
        //     //     options[i].classList.remove('active')
        //     // }
        // }
        // function processEvents(e){
        //     let parent = this.parentNode,
        //         hasClass = parent.classList.contains('time'),
        //     //  let hasClass = this.parentNode.classList.contains('time'),
        //         name = this.innerHTML
        //     if (hasClass == true){
        //         document.getElementById('time').innerHTML = name
        //         console.log(name)
        //     }else{
        //         document.getElementById('people').innerHTML = name
        //     }
        //     // parent.classList.toggle('active')
        //     // parent.classList.remove('active')
        // }
        // var el = document.querySelectorAll('.form__option-list > li');
        // if (el != null) {
        //     for(var i=0 ; i<el.length ; i++){
        //         el[i].addEventListener('click', processEvents, true);
        //     }                
        // }
        // let options = document.querySelectorAll('.form__option')
        // if (options != null) {
        //     for(var i=0 ; i<options.length ; i++){
        //         options[i].addEventListener('click', proc, true);
        //     }
                
        // }
        document.getElementById('phone').addEventListener('input', function (e) {
			var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
			e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
        })

    },
    data() {
        return {
            phone: this.$store.state.localStorage._user.phone,
            name: this.$store.state.localStorage._user.name
        }
    }
}
</script>


