		var positionArr = [{ x: 520, y: 496 }];


		$(document).ready(function (e) {

			$('#banner img').hide();

			$('#banner1').fadeIn();

			$('.pager ul a').click(function (e) {
				e.preventDefault();
				$('#banner img').fadeOut();
				$($(this).attr('href')).fadeIn();
				$('.pager .active').removeClass();
				$(this).parent().addClass('active');
			});

			setInterval(function () {
				var $next = $('.pager ul .active').next().find('a');
				if ($next.length != 0) {
					$next.trigger('click');

				} else {
					$('.pager ul li:first-child').find('a').trigger('click');
				}
			}, 4500)



		});


		$(window).load(function (e) {


			var positionArr = [{ x: 520, y: 496, id: 1 },
			{ x: 554, y: 439, id: 2 },
			{ x: 509, y: 433, id: 3 },
			{ x: 644, y: 486, id: 4 },
			{ x: 460, y: 439, id: 5 },
			{ x: 479, y: 440, id: 6 },
			{ x: 580, y: 427, id: 7 },
			{ x: 593, y: 435, id: 8 },
			{ x: 638, y: 439, id: 9 },
			{ x: 488, y: 426, id: 10 },
			{ x: 617, y: 439, id: 11 },
			{ x: 660, y: 469, id: 12 },
			{ x: 527, y: 442, id: 13 },
			{ x: 498, y: 326, id: 14 },
			{ x: 571, y: 335, id: 15 },
			{ x: 533, y: 339, id: 16 },
			{ x: 553, y: 397, id: 17 },
			{ x: 536, y: 390, id: 18 },
			{ x: 550, y: 352, id: 19 },
			{ x: 611, y: 379, id: 20 },
			{ x: 626, y: 391, id: 21 },
			{ x: 482, y: 361, id: 22 },
			{ x: 529, y: 360, id: 23 },
			{ x: 595, y: 372, id: 24 },
			{ x: 574, y: 358, id: 25 },
			{ x: 510, y: 348, id: 26 },
			{ x: 539, y: 313, id: 27 },
			{ x: 511, y: 376, id: 28 },
			{ x: 553, y: 381, id: 29 },
			{ x: 661, y: 390, id: 30 },
			{ x: 530, y: 412, id: 31 },
			{ x: 610, y: 300, id: 32 },
			{ x: 594, y: 318, id: 33 },
			{ x: 527, y: 375, id: 34 },
			{ x: 502, y: 127, id: 35 },
			{ x: 445, y: 274, id: 36 },
			{ x: 468, y: 290, id: 37 },
			{ x: 451, y: 307, id: 38 },
			{ x: 640, y: 214, id: 39 },
			{ x: 341, y: 300, id: 40 },
			{ x: 566, y: 256, id: 41 },
			{ x: 542, y: 87, id: 42 },
			{ x: 514, y: 189, id: 43 },
			{ x: 553, y: 274, id: 44 },
			{ x: 250, y: 171, id: 45 },
			{ x: 419, y: 337, id: 46 },
			{ x: 215, y: 289, id: 47 },
			{ x: 305, y: 198, id: 48 },
			{ x: 136, y: 391, id: 49 },
			{ x: 172, y: 429, id: 50 }];

			$(".place img").css('width', 20);

			$(".place img").css('height', 30);
			var preTag = null;
			$(".place img").click(function (e) {
				e.preventDefault();
				if (preTag != null) {
					preTag.find('img').css('width', 20);
					preTag.find('img').css('height', 30);
					preTag.find('.location').hide();
					preTag.find('.no').hide();
				}
				$(e.target).parent().find('.location').show();
				$(e.target).parent().find('.no').show();
				$(e.target).parent().find('img').css('width', 30);
				$(e.target).parent().find('img').css('height', 40);
				$(e.target).parent().css('zIndex', 4);
				preTag = $(e.target).parent();
			});
			$(".place .no").click(function (e) {
				e.preventDefault();
			});
			$(".place").click(function (e) {
				e.preventDefault();
			});
			$(".place .location").click(function (e) {
				e.preventDefault();
				if($(e.target).parent().attr('href')!= undefined && $(e.target).parent().attr('href')!= ""){
				window.location = $(e.target).parent().attr('href');
				}
			});
			for (var a in positionArr) {
				counter = Number(a) + 1;
				$("#place" + counter).css({ marginLeft: positionArr[a].x - $("#place" + counter).width() / 2, marginTop: positionArr[a].y - $("#place" + counter).height() / 3 * 2 });
			}
			$(".place .location").hide();
			$(".place .no").hide();


		});