
$(function(){
	var cats=[];
    var model = {
        init: function() {
            if (cats == "") {
                var item1 = {};
            	item1["id"] = "one";
        		item1 ["name"] = "Pepsi" ;
        		item1 ["clicks"] = "0";
        		item1 ["imgurl"] = "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg";
        		cats.push(item1);

        		var item2 = {};
        		item2["id"] = "two";
        		item2 ["name"] = "Cooky";
        		item2 ["clicks"] = "0";
        		item2 ["imgurl"] = "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg";
        		cats.push(item2);

        		var item3 = {};
        		item3["id"] = "three";
        		item3 ["name"] = "Sheetos";
        		item3 ["clicks"] = "0";
        		item3 ["imgurl"] = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg";
        		cats.push(item3);

        		var item4 = {};
        		item4["id"] = "four";
        		item4 ["name"] = "Olar";
        		item4 ["clicks"] = "0";
        		item4 ["imgurl"] = "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg";
        		cats.push(item4);

        		var item5 = {};
        		item5["id"] = "five";
        		item5 ["name"] = "Bob";
        		item5 ["clicks"] = "0";
        		item5 ["imgurl"] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRDridubdf8XjKdJYC0lDsfgHlSSIbbalXSYEpxZU71z41rZGB";
            	cats.push(item5);
            }
        },

        update: function(obj) {
        	for (var i = 0; i < cats.length; i++) {
        		if (obj == cats[i]['id']) {
        			cats[i]['clicks'] ++;
        			octopus.getCatView(cats[i]['id']);
        		}
        	}
        },

        getAllCats: function() {
            return cats;
        }
    };

    var octopus = {
        
        getCats: function() {
            return model.getAllCats();
        },

        increment: function(obj){
        	model.update(obj);
        },

        init: function() {
            model.init();
            view.list();
        },
        getCatView: function(obj){
        	allCats = model.getAllCats();
        	for (var i = 0; i < allCats.length; i++) {
        		if(allCats[i]['id'] == obj){
        			view.viewArea(allCats[i]);
        		}
        	}
        }
    };


    var view = {
        list: function(){
        	this.catList = $('.c1');
            var htmlStr = '';
            octopus.getCats().forEach(function(cat)
            {
                htmlStr += '<div class="container '+cat['id']+' txt"><h4 class="'+cat['id']+'">'+cat['name']+'</h4></div>';
            	$('body div.flex-container div.c1 div.'+cat['id']+' h4 '+cat['id']).click(function(e){
            		octopus.getCatView(cat['id']);
				});
            
            });
            this.catList.html( htmlStr );
            $('h4').click(function(e){
					cls=$(this).attr('class');
					octopus.getCatView(cls);
				});
        },
       	viewArea: function(obj){
       		var vArea = $('.c2');
       		var htmlStr = '';
       		htmlStr += '<div class="container '+obj['id']+' img"><img class="'+obj['id']+'" src="'+obj['imgurl']+'"></div><div class="container><h5 class="'+obj['id']+'">'+obj['clicks']+'</h5></div>'
       		vArea.html(htmlStr);
            $('img').click(function(e){
            	var icls = $(this).attr('class');
            	octopus.increment(icls);
				});

       	}
    };
        octopus.init();
});

