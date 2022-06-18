const drawStar = (target) => {
    document.querySelector(`#ss1 span`).style.width = `${target.value * 20}%`;
}
const drawStar1 = (target) => {
    document.querySelector(`#ss2 span`).style.width = `${target.value * 20}%`;
}
const drawStar2 = (target) => {
    document.querySelector(`#ss3 span`).style.width = `${target.value * 20}%`;
}

const movie_list = [new movie_temp, new movie_temp, new movie_temp];
movie_list[0].title="마녀2";
movie_list[1].title="2번";
movie_list[2].title="3번";

//movie[0]이 1번영화 movie[1]이 2번영화 movie[2]가 3번영화
movie_temp.prototype.make_div = function () {
    
    const divma = document.querySelector('.container');
    // if(this.review_and_star.length!=0){
    //     let temp=document.getElementsByClassName('square');
    //     temp.remove();
    // }
    for (let i = this.index; i < this.review_and_star.length; i++,this.index++) {
        let $div = document.createElement('div');
        $div.className = 'square';
        let $span = document.createElement('span');
        let $span1 = document.createElement('span');
        let $span2 = document.createElement('span');
        let $div2 = document.createElement('div');
        divma.appendChild($div);
        $div.append($span,$span1,$span2,$div2);
        let $h2 = document.createElement('h2');
        let $p = document.createElement('p');
        let $p1 = document.createElement('p');
        $div2.append($h2,$p1,$p);
        $p1.append("평점 : "+this.review_and_star[i][0]+"점");
        $h2.append(this.title);
        $p.append(this.review_and_star[i][1]);
    }
}


function set_movie1() { //1번영화에 onclick으로 평가 넣는 함수
    let $star1 = document.getElementById('star1').value;
    let $mvreview1 = document.getElementById('mvreview1').value;
    movie_list[0].set_star_and_review($star1, $mvreview1);
}
function set_movie2() { //2번영화에 onclick으로 평가 넣는 함수
    movie_list[1].set_star_and_review(document.getElementById('star2').value, document.getElementById('mvreview2').value);
}
function set_movie3() { //3번영화에 onclick으로 평가 넣는 함수
    movie_list[2].set_star_and_review(document.getElementById('star3').value, document.getElementById('mvreview3').value);
}

function movie_temp() {
    this.index=0;
    this.title="";
    this.review_and_star = [];
}
movie_temp.prototype.set_star_and_review = function (star, review) { //별점과 리뷰를 저장하는 함수
    this.review_and_star.push([star, review]);
}
movie_temp.prototype.get_nth_review = function (n) { //n번째 리뷰 가져오는 함수
    return this.review_and_star[n][1];
}
movie_temp.prototype.get_nth_star = function (n) { //n번재 별점 가져오는 함수
    return this.review_and_star[n][0];
}
movie_temp.prototype.get_all = function () {
    this.result = "";
    for (let i = 0; i < this.review_and_star.length; i++) {
        this.result += this.print_format(this.review_and_star[i][0],
            this.review_and_star[i][1]);
    }
    return this.result;
}
movie_temp.prototype.print_format = function (star, review) {
    return '평점 : ' + star + '<br>' + review + '<br><br><br>';
}
movie_temp.prototype.get_star_average = function () { //총 별점의 평균 가져오는 함수
    let sum = 0;
    for (let i = 0; this.review_and_star.length; i++) {
        sum += this.review_and_star[i][0];
    }
    return sum / this.review_and_star.length;
}

$(document).ready(function () {
    $('#r1').click(function () {
        $('#m1').show();
        $('#m2').hide();
        $('#m3').hide();
    });
    $('#r2').click(function () {
        $('#m1').hide();
        $('#m2').show();
        $('#m3').hide();
    });
    $('#r3').click(function () {
        $('#m1').hide();
        $('#m2').hide();
        $('#m3').show();
    });
});
