function aov(h,c,k,l){var a=l.replace(/:/g,'').replace(/\s/g,'-'),b=a.toLowerCase();$.ajax({type:'GET',url: '//'+h+'.'+c+'/json/'+k+'_'+b+',cache:false,dataType:'text',beforeSend: function(){$('#full_data_Character').html('<div id="preloader_relative"><div class="preload_spinner"></div></div>');},success:function(e){var parse=JSON.parse(e),data=parse.data; $('#full_data_Character').html('<table><tr><th><div class="image-container"><div class="image-cover" style="background-image:url('+data.character_image+')" title="'+data.character_name+'"></div></div></th></tr></table><table class="tbl_stats"><tr><th colspan="100%">Stats</th></tr><tr><td class="title">Ability Effects</td><td class="info"><div class="progress-stats"><div class="progress" data-percent="'+data.character_stats.ability_effects+'" data-color="#0099ff"></div></div></td></tr><tr><td class="title">Attack Damage</td><td class="info align_right"><div class="progress-stats"><div class="progress" data-percent="'+data.character_stats.attack_damage+'" data-color="#ff3300"></div></div></td></tr><tr><td class="title">Poise</td><td class="info align_right"><div class="progress-stats"><div class="progress" data-percent="'+data.character_stats.poise+'" data-color="#003300"></div></div></td></tr><tr><td class="title">Difficulty</td><td class="info align_right"><div class="progress-stats"><div class="progress" data-percent="'+data.character_stats.difficulty+'" data-color="#ff9900"></div></div></td></tr><tr><td class="title">Base HP</td><td class="info align_right">'+data.character_stats.base_hp+'</td></tr><tr><td class="title">Growth HP</td><td class="info align_right">'+data.character_stats.growth_hp+'</td></tr><tr><td class="title">Base Attack</td><td class="info align_right">'+data.character_stats.base_attack+'</td></tr><tr><td class="title">Growth Attack</td><td class="info align_right">'+data.character_stats.growth_attack+'</td></tr><tr><td class="title">Base Defense</td><td class="info align_right">'+data.character_stats.base_defense+'</td></tr><tr><td class="title">Growth Defense</td><td class="info align_right">'+data.character_stats.growth_defense+'</td></tr><tr><td class="title">Base Resistanse</td><td class="info align_right">'+data.character_stats.base_resistanse+'</td></tr><tr><td class="title">Growth Resistanse</td><td class="info align_right">'+data.character_stats.growth_resistanse+'</td></tr></table><table><tr><th>Story</th></tr><tr><td class="fullwidth">'+data.character_story+'</td></tr></table><table><tr><th colspan="100%">Skins</th></tr><tr><td class="fullwidth_nopd"><div class="skins-container"></div><div class="clear"></div></td></tr></table><table class="tbl_skills"><tr><th colspan="100%">Skills</th></tr></table><table class="tbl_spells"><tr><th colspan="100%">Spells</th></tr></table>'); $.each(data.character_skins,function(k,v){$('.skins-container').append('<div class="skins-vertical" style="background-image:url('+v.image+')"></div>');}); $.each(data.character_spells,function(k,v){$('.tbl_spells').append('<tr><td class="title"><div class="spells-icon" style="background-image:url('+v.icon+')"></div></td><td class="info">'+v.description+'</td></tr>');}); $.each(data.character_skills,function(k,v){if(v.name=='Restore'){$('.tbl_skills').append('<tr><td class="fullwidth" colspan="100%"><div class="skills-name">'+v.name+'</div>'+v.description+'</td></tr>');}else{$('.tbl_skills').append('<tr><td class="title"><div class="skills-icon" style="background-image:url('+v.icon+')"></div></td><td class="info"><div class="skills-name">'+v.name+'</div>'+v.description+'</td></tr>');}}); $('.progress-stats').ProgressBar();}});}