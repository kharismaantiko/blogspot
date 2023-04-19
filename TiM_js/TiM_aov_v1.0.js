function stats(stats){return '<tr><td class="title">Ability Effects</td><td class="wspace">:</td><td class="info">'+stats.ability_effects+'</td></tr><tr><td class="title">Attack Damage</td><td class="wspace">:</td><td class="info">'+stats.attack_damage+'</td></tr><tr><td class="title">Poise</td><td class="wspace">:</td><td class="info">'+stats.poise+'</td></tr><tr><td class="title">Difficulty</td><td class="wspace">:</td><td class="info">'+stats.difficulty+'</td></tr><tr><td class="title">Base HP</td><td class="wspace">:</td><td class="info">'+stats.base_hp+'</td></tr><tr><td class="title">Growth HP</td><td class="wspace">:</td><td class="info">'+stats.growth_hp+'</td></tr><tr><td class="title">Base Attack</td><td class="wspace">:</td><td class="info">'+stats.base_attack+'</td></tr><tr><td class="title">Growth Attack</td><td class="wspace">:</td><td class="info">'+stats.growth_attack+'</td></tr><tr><td class="title">Base Defense</td><td class="wspace">:</td><td class="info">'+stats.base_defense+'</td></tr><tr><td class="title">Growth Defense</td><td class="wspace">:</td><td class="info">'+stats.growth_defense+'</td></tr><tr><td class="title">Base Resistanse</td><td class="wspace">:</td><td class="info">'+stats.base_resistanse+'</td></tr><tr><td class="title"></td><td class="wspace">:</td><td class="info">'+stats.growth_resistanse+'</td></tr>';}
function skins(skins){
$.each(skins, function(k,v){$('.slide-skins').append('<div class="carousel-cell"><div class="image-vertical" style="background-image:url('+v.image+')"></div></div>');});
}
function skills(skills){
$.each(skills, function(k,v){$('#skills').append('<tr><td class="title"><div class="skills-icon" style="background-image:url('+v.icon+')"></div></td><td class="info"><div class="skills-name">'+v.name+'</div>'+v.description+'</td></tr>');});
}
function spells(spells){
$.each(spells, function(k,v){$('#spells').append('<tr><td class="title"><div class="spells-icon" style="background-image:url('+v.icon+')"></div></td><td class="info"><div class="spells-name">'+v.name+'</div>'+v.description+'</td></tr>');});
}
function aov(h,c,k,p){
$.ajax({type: 'GET',url: 'http://'+h+c+'/json/k+'_'+p,cache:false,dataType:'text',success:function(resp){let parse=JSON.parse(resp),data=parse.data;
$('#full_data_Character').html('<div class="image-container"><div class="image-cover" style="background-image:url('+data.character_image+')" title="'+data.character_name+'"></div></div><table class="table_info"><tr><th>Stats</th></tr><tr><td class="title">Type</td><td class="wspace">:</td><td class="info">'+data.character_type+'</td></tr>
'+stats(data.character_stats)+'</table><table class="table_info"><tr><th>Story</th></tr><tr><td class="fullwidth"><div class="read-more-less">'+data.character_story+'</div></td></tr></table><table class="table_info"><tr><th>Skins</th></tr><tr><td class="fullwidth"><div class="slide-skins"></div></td></tr></table><table id="skills" class="table_info">
<tr><th>Skills</th></tr></table><table id="spells" class="table_info"><tr><th>Items</th></tr></table>');
skins(data.character_skins);
spells(data.character_spells);
skills(data.character_skills);
}});
}
