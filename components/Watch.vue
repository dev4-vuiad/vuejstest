<script setup>
    const props = defineProps(['pending', 'links'])
    let pending = props.pending
    let links = props.links

    watch(
        () => props.pending,
        () => {
            links = props.links
        }
    )
</script>

<template>
    <!-- <div class="col-md-12 video-full" align="center" style="margin-bottom:10px;">
        <div class="row">
            <div class="col-md-12" id="video_content">
                <div id="playVideoUl">
                    <iframe :src="links[0] + '?ref=kokoatv.net'" class="test" width="100%" height="430"
                        frameborder="0" scrolling="no" type="application/x-shockwave-flash" allowscriptaccess="always"
                        allowfullscreen="true" name="video_player" id="video_player"></iframe>
                </div>
            </div>
        </div>
        <div class="row" style="margin-top:10px;">
            <div class="" style="padding:0" id="div_content_button">
                <div class="col-md-2" style="text-align:left;" id="box_back_btn_pc">

                    <?php if( $backlink != "" ){
                                ?>
                    <a href="<?php echo $backlink;?>"><button class="btn btn-back"><i class="fas fa-arrow-left"></i>
                            돌아가기</button></a>
                    <?php 
                            }?>
                </div>
                <div class="col-md-10" id="row_contain_link">
                    <div style="float:left;" id="box_back_btn_mobile">
                        <a href="<?php echo $backlink;?>"><button class="btn btn-back"><i class="fas fa-arrow-left"></i>
                                돌아가기</button></a>
                    </div>
                    <div class="flex-btn-hq">
                        <?php
                            $arr_check = array();
                            $num_link = 3;
                            foreach ($link as $k => $l) {
                                $l = str_replace("\r","",$l);
                                $l = str_replace("'","",$l);
                                $l = str_replace('"','',$l);
                                $part = "";
                                if( strpos($l, ">") !== false ){
                                    $exp_l = explode(">",$l);
                                    $part = str_replace("<", "", $exp_l[0]);
                                    $l = $exp_l[1];
                                    $num_link++;
                                }
                                $l_n = str_replace("https://","",$l);
                                $l_n = explode("/",$l_n);
                                $l_n = $l_n[0];
                                $l_n = explode(".",$l_n);
                                $name = "";
                                if( count($l_n) > 2 ){
                                    $name = $l_n[1];
                                }else $name = $l_n[0];

                                if( strpos($backlink , "episode") !== false ){
                                    if($name != "youtube" && ( in_array($name,$arr_check) || count($arr_check) == $num_link) ){
                                        continue;
                                    }else $arr_check[] = $name;
                                }else if($k > $num_link) break;
                            
                                $name = ucfirst($name);
                                if( $name == 'Vidground' ) $name = "HQ Plus";
                                if( $name == 'Short' ) $name = "Hydrax";
                                if( $name == 'Asianembed' || $name == 'Dembed1' || $name == 'Asianplay' ) $name = "K-Vid";
                                if( $part != "" ){
                                    $name .= " - ".$part;
                                }
                                ?>
                        <?php
                                    

                                        if (strpos($l, "https://videojs.vidground.com") !== false) {
                                            ?>
                        <button class="btn btn-play btn-hqplus <?php echo $k==0?'active':''; ?>"
                            onclick="playback(this,'<?php echo $l;?>')"> <i class="fas fa-play"></i>
                            <?php echo $name;?>
                        </button>
                        <?php
                                        } else if(strpos($l, "https://asianhdplay.pro") !== false){
                                            $count_asia = strlen($l);
                                            if ($count_asia > 80) {
                                            ?>
                        <button class="btn btn-play btn-asia-show <?php echo $k==0?'active':''; ?>"
                            onclick="playback(this,'<?php echo $l;?>')"> <i class="fas fa-play"></i>
                            <?php echo $name;?>
                        </button>
                        <?php  } ?>

                        <button class="btn btn-play btn-asia <?php echo $k==0?'active':''; ?>"
                            onclick="playback(this,'<?php echo $l;?>')"> <i class="fas fa-play"></i>
                            <?php echo $name;?>
                        </button>
                        <?php }else {
                                            ?>
                    <button class="btn btn-play <?php echo $k==0?'active':''; ?>"
                        onclick="playback(this,'<?php echo $l;?>')"> <i class="fas fa-play"></i>
                        <?php echo $name;?>
                    </button>
                    <?php
                                    }
                                ?>
                    <!--  <button class="btn btn-play <?php //echo $k==0?'active':''; ?>" onclick="playback(this,'<?php //echo $l;?>')"> <i class="fas fa-play"></i> <?php //echo $name;?></button> -->
                    <?php
                        }
                        ?>
                </div>
            </div>
        </div>
    </div> -->
</div></template>