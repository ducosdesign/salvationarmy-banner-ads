(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"ads_2_atlas_1", frames: [[0,335,260,222],[0,559,258,72],[0,633,246,46],[0,0,290,333]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["ads_2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["ads_2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["ads_2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3643,5464);


(lib.Layer1 = function() {
	this.initialize(ss["ads_2_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Layer1();
	this.instance.setTransform(0,0,0.2077,0.2077);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,60.3,69.2);
p.frameBounds = [rect];


(lib.line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#181B3D").p("AqLAAIUXAA");
	this.shape.setTransform(65.175,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-1,-1,132.4,2);
p.frameBounds = [rect];


(lib.image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.0439,0.0439);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,160,240);
p.frameBounds = [rect];


(lib.givehope = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.409,0.409);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,106.4,90.8);
p.frameBounds = [rect];


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,129,36);
p.frameBounds = [rect];


(lib.bodytext = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,123,23);
p.frameBounds = [rect];


(lib.blueBg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#181B3D").s().p("AseDhIgBgBQAAi6CEiCQCEiEC6AAIR9AAIAAABIAAG/IAAABg");
	this.shape.setTransform(80,22.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,160,45);
p.frameBounds = [rect];


// stage content:
(lib.ads2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		this.stop();
		
		// Wait 30 seconds then go back to frame 1
		var self = this;
		setTimeout(function() {
		    self.gotoAndPlay(0);
		}, 10000); // 10000 milliseconds = 30 seconds
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(5,1,1).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(24,27,61,0)").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},59).wait(1));

	// button
	this.instance = new lib.button("synched",0);
	this.instance.setTransform(-77.55,198,1,1,0,0,0,64.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:79.95,y:213.5},59).wait(1));

	// bodytext
	this.instance_1 = new lib.bodytext("synched",0);
	this.instance_1.setTransform(240.5,153.2,1,1,0,0,0,61.4,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:76.7,y:168.7},59).wait(1));

	// line
	this.instance_2 = new lib.line("synched",0);
	this.instance_2.setTransform(241.05,128.05,1,1,0,0,0,65.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:79.35,y:146.65},59).wait(1));

	// givehope
	this.instance_3 = new lib.givehope("synched",0);
	this.instance_3.setTransform(-58.25,68.35,1,1,0,0,0,53.1,45.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:53.2,scaleX:1.2224,scaleY:1.2215,x:79.65,y:78.35},59).wait(1));

	// logo
	this.instance_4 = new lib.logo("synched",0);
	this.instance_4.setTransform(295.95,527,1,1,0,0,0,30.1,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:121.65,y:549},59).wait(1));

	// blueaccent
	this.instance_5 = new lib.blueBg("synched",0);
	this.instance_5.setTransform(247.95,578.3,1,1,0,0,0,80,22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:79.95,y:577.5},59).wait(1));

	// image
	this.instance_6 = new lib.image("synched",0);
	this.instance_6.setTransform(80,628.95,1,1,0,0,0,80,120);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.125,scaleY:1.1248,x:69.95,y:420.1},59).wait(1));

	// bgWhite
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgMfAnEMAAAhOHIY/AAMAAABOHg");
	this.shape_2.setTransform(80,250);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(59));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-62.1,297.5,470,751.4);
p.frameBounds = [rect, new cjs.Rectangle(-59.4,297.5,464.5,748.1), new cjs.Rectangle(-56.7,297.5,459,744.8), new cjs.Rectangle(-54.1,297.5,453.5,741.6), new cjs.Rectangle(-51.3,297.5,447.9,738.3), new cjs.Rectangle(-48.7,297.5,442.4,734.9), new cjs.Rectangle(-46,297.5,436.9,731.7), new cjs.Rectangle(-43.3,297.5,431.4,728.4), new cjs.Rectangle(-40.7,297.5,425.9,725.1), new cjs.Rectangle(-38,297.5,420.3,721.8), new cjs.Rectangle(-35.3,297.5,414.8,718.5), new cjs.Rectangle(-32.7,297.5,409.3,715.2), new cjs.Rectangle(-30,297.5,403.8,712), new cjs.Rectangle(-27.3,297.5,398.3,708.7), new cjs.Rectangle(-24.7,297.5,392.8,705.4), new cjs.Rectangle(-22,297.5,387.3,702.1), new cjs.Rectangle(-19.3,297.5,381.8,698.9), new cjs.Rectangle(-16.7,297.5,376.2,695.6), new cjs.Rectangle(-14,297.5,370.7,692.2), new cjs.Rectangle(-11.3,297.5,365.2,689), new cjs.Rectangle(-8.7,297.5,359.7,685.6), new cjs.Rectangle(-6,297.5,354.2,682.4), new cjs.Rectangle(-3.3,297.5,348.6,679.1), new cjs.Rectangle(-0.7,297.5,343.1,675.8), new cjs.Rectangle(2,297.5,337.6,672.5), new cjs.Rectangle(4.7,297.5,332.1,669.3), new cjs.Rectangle(7.3,297.5,326.6,666), new cjs.Rectangle(10,297.5,321,662.7), new cjs.Rectangle(12.7,297.5,315.5,659.3), new cjs.Rectangle(15.3,297.5,310,656.1), new cjs.Rectangle(18,297.5,304.5,652.8), new cjs.Rectangle(20.7,297.5,299,649.5), new cjs.Rectangle(23.4,297.5,293.5,646.3), new cjs.Rectangle(26.1,297.5,288,642.9), new cjs.Rectangle(28.7,297.5,282.5,639.7), new cjs.Rectangle(31.4,297.5,276.9,636.4), new cjs.Rectangle(34.1,297.5,271.4,633.2), new cjs.Rectangle(36.7,297.5,265.9,629.8), new cjs.Rectangle(39.4,297.5,260.4,626.5), new cjs.Rectangle(42.1,297.5,254.9,623.3), new cjs.Rectangle(44.8,297.5,249.3,620), new cjs.Rectangle(47.4,297.5,243.8,616.7), new cjs.Rectangle(50.1,297.5,238.3,613.4), new cjs.Rectangle(52.8,297.5,232.8,610.1), new cjs.Rectangle(55.4,297.5,227.3,606.8), new cjs.Rectangle(58.1,297.5,221.7,605), new cjs.Rectangle(60.8,297.5,216.2,605), new cjs.Rectangle(63.4,297.5,210.7,605), new cjs.Rectangle(63.8,297.5,207.5,605), new cjs.Rectangle(63.4,297.5,205.1,605), new cjs.Rectangle(63.1,297.5,202.5,605), new cjs.Rectangle(62.7,297.5,200.1,605), new cjs.Rectangle(62.4,297.5,197.6,605), new cjs.Rectangle(62,297.5,195.1,605), new cjs.Rectangle(61.7,297.5,192.5,605), new cjs.Rectangle(61.4,297.5,190,605), new cjs.Rectangle(61,297.5,187.5,605), new cjs.Rectangle(60.7,297.5,185,605), new cjs.Rectangle(60.3,297.5,182.5,605), new cjs.Rectangle(60,297.5,182.6,605)];
// library properties:
lib.properties = {
	id: 'E9F1B5B64C924FD280DBB6ECF8734527',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Image.png", id:"Image"},
		{src:"images/ads_2_atlas_1.png", id:"ads_2_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E9F1B5B64C924FD280DBB6ECF8734527'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;