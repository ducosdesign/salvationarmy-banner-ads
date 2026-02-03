(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [
		{name:"ad1_atlas_1", frames: [[292,0,364,81],[292,83,573,36],[867,0,100,100],[0,0,290,333]]}
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



(lib.CachedBmp_4 = function() {
	this.initialize(ss["ad1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["ad1_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image111 = function() {
	this.initialize(ss["ad1_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.initialize(ss["ad1_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.volBtn = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,182,40.5);
p.frameBounds = [rect];


(lib.make = function(mode,startPosition,loop,reversed) {
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
p.nominalBounds = rect = new cjs.Rectangle(0,0,286.5,18);
p.frameBounds = [rect];


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


(lib._img = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Image111();
	this.instance.setTransform(0,0,0.8002,0.8002);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,80,80);
p.frameBounds = [rect];


(lib.btnA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(24,27,61,0)").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,728,90);
p.frameBounds = [rect];


(lib.bgWhite = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,728,90);
p.frameBounds = [rect];


(lib.bgLightblue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#CED4DF").s().p("EgjJAHCIAAgQQAAi0BGikQBDieB6h6QB6h6CfhEQCkhFC0AAMA4fAAAIAAODg");
	this.shape.setTransform(225,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,450,90);
p.frameBounds = [rect];


(lib.bgBlue = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#181B3D").s().p("EgidAHCIAAuDMA32AAAQCrAACbBCQCWA/B0B0QB0B0BACVQBBCcAACqIAAA/g");
	this.shape.setTransform(220.625,44.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,441.3,90);
p.frameBounds = [rect];


// stage content:
(lib.ad1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,89];
	// timeline functions:
	this.frame_0 = function() {
		//this.cursor = "pointer";
		//this.addEventListener("click", function() {
		//   window.open("https://salvationarmy.ca/prince-george", "_blank");
		//});
	}
	this.frame_89 = function() {
		this.stop();
		
		// Wait 30 seconds then go back to frame 1
		var self = this;
		setTimeout(function() {
		    self.gotoAndPlay(0);
		}, 10000); // 10000 milliseconds = 30 seconds
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89).call(this.frame_89).wait(2));

	// Button
	this.clickbtnA = new lib.btnA();
	this.clickbtnA.name = "clickbtnA";
	this.clickbtnA.setTransform(364,45,1,1,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickbtnA, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clickbtnA).wait(91));

	// make_an_impact
	this.instance = new lib.make("synched",0);
	this.instance.setTransform(256.5,-45.05,1,1,0,0,0,143.2,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:44.95,loop:false},89,cjs.Ease.elasticInOut).wait(2));

	// volunteer_btn
	this.instance_1 = new lib.volBtn("synched",0);
	this.instance_1.setTransform(546.85,123.55,1,1,0,0,0,91,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:43.55,loop:false},89,cjs.Ease.bounceInOut).wait(2));

	// logo
	this.instance_2 = new lib.logo("synched",0);
	this.instance_2.setTransform(687.65,140,1,1,0,0,0,30.1,34.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:45,loop:false},89,cjs.Ease.bounceInOut).wait(2));

	// image
	this.instance_3 = new lib._img("synched",0);
	this.instance_3.setTransform(54.4,-45,1,1,0,0,0,40,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:45,loop:false},89,cjs.Ease.bounceInOut).wait(2));

	// bg_blue
	this.instance_4 = new lib.bgBlue("synched",0);
	this.instance_4.setTransform(-229.4,45,1,1,0,0,0,220.6,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:220.6},89).wait(2));

	// bg_lightblue
	this.instance_5 = new lib.bgLightblue("synched",0);
	this.instance_5.setTransform(963,45,1,1,0,0,0,225,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:463},89).wait(2));

	// bg_white
	this.instance_6 = new lib.bgWhite("synched",0);
	this.instance_6.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89).to({startPosition:0},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-86,-40,1638,259.6);
p.frameBounds = [rect, new cjs.Rectangle(-80.9,-39.5,1627.4,258.5), new cjs.Rectangle(-75.9,-39.3,1616.7,258.1), new cjs.Rectangle(-70.9,-39.4,1606,258.5), new cjs.Rectangle(-65.8,-39.9,1595.4,259.5), new cjs.Rectangle(-60.7,-38.8,1584.6,257.2), new cjs.Rectangle(-55.6,-37.9,1573.9,255.4), new cjs.Rectangle(-50.6,-37.4,1563.3,254.2), new cjs.Rectangle(-45.6,-37.2,1552.6,253.8), new cjs.Rectangle(-40.5,-37.3,1542,254.1), new cjs.Rectangle(-35.4,-37.8,1531.3,255.1), new cjs.Rectangle(-30.4,-38.7,1520.6,256.8), new cjs.Rectangle(-25.4,-39.8,1509.9,259.2), new cjs.Rectangle(-20.2,-37.7,1499.2,254.9), new cjs.Rectangle(-15.2,-35.4,1488.6,250.1), new cjs.Rectangle(-10.1,-33.4,1477.9,246.1), new cjs.Rectangle(-5.1,-31.8,1467.2,242.7), new cjs.Rectangle(-0.1,-30.5,1456.6,240.1), new cjs.Rectangle(5,-29.6,1445.9,238.2), new cjs.Rectangle(10.1,-29,1435.2,237), new cjs.Rectangle(15.1,-28.7,1424.6,236.5), new cjs.Rectangle(20.2,-28.8,1413.8,236.7), new cjs.Rectangle(25.3,-29.3,1403.2,237.6), new cjs.Rectangle(30.3,-30,1392.5,239.1), new cjs.Rectangle(35.4,-31.2,1381.8,241.5), new cjs.Rectangle(40.4,-32.7,1371.2,244.5), new cjs.Rectangle(45.4,-34.5,1360.5,248.2), new cjs.Rectangle(50.5,-36.7,1349.8,252.7), new cjs.Rectangle(55.6,-39.2,1339.2,257.8), new cjs.Rectangle(60.6,-36.3,1328.4,252), new cjs.Rectangle(65.7,-31.2,1317.8,241.4), new cjs.Rectangle(70.8,-26.3,1307.1,231.4), new cjs.Rectangle(75.8,-21.8,1296.4,222.3), new cjs.Rectangle(80.9,-17.7,1285.8,213.8), new cjs.Rectangle(85.9,-17.7,1275.1,209.8), new cjs.Rectangle(90.9,-19.2,1264.4,207.6), new cjs.Rectangle(96,-19.7,1253.8,204.9), new cjs.Rectangle(101.1,-18.9,1243.1,201.2), new cjs.Rectangle(106.1,-16.5,1232.4,196.1), new cjs.Rectangle(111.2,-12,1221.7,189.6), new cjs.Rectangle(116.3,-5.5,1211.1,181.2), new cjs.Rectangle(121.3,2.8,1200.4,171.5), new cjs.Rectangle(126.4,3.9,1189.7,169.3), new cjs.Rectangle(131.4,4.6,1179.1,167.9), new cjs.Rectangle(136.5,5,1168.4,167.1), new cjs.Rectangle(141.6,5,1157.7,167), new cjs.Rectangle(146.6,5.4,1147,166.3), new cjs.Rectangle(151.7,6,1136.3,164.9), new cjs.Rectangle(156.7,7.1,1125.7,162.8), new cjs.Rectangle(161.8,8.5,1115,159.9), new cjs.Rectangle(166.8,10.2,1104.3,156.4), new cjs.Rectangle(171.9,12.3,1093.7,152.2), new cjs.Rectangle(176.9,14.7,1083,147.2), new cjs.Rectangle(182,17.4,1072.3,141.6), new cjs.Rectangle(187.1,20.5,1061.6,135.2), new cjs.Rectangle(192.1,24,1050.9,128.1), new cjs.Rectangle(197.2,27.8,1040.3,120.3), new cjs.Rectangle(202.2,31.9,1029.6,111.9), new cjs.Rectangle(207.3,36.3,1018.9,102.7), new cjs.Rectangle(212.3,41.2,1008.3,93.9), new cjs.Rectangle(217.4,45,997.6,90), new cjs.Rectangle(222.5,45,986.9,90), new cjs.Rectangle(227.5,45,976.2,90), new cjs.Rectangle(232.6,44.5,965.5,90.5), new cjs.Rectangle(237.6,42.7,954.9,92.4), new cjs.Rectangle(242.7,41.2,944.2,93.8), new cjs.Rectangle(247.7,40.1,933.5,95), new cjs.Rectangle(252.8,39.3,922.9,96.6), new cjs.Rectangle(257.8,38.9,912.2,97.5), new cjs.Rectangle(262.9,38.8,901.5,97.7), new cjs.Rectangle(268,39,890.8,97.2), new cjs.Rectangle(273,39.6,880.1,96), new cjs.Rectangle(278.1,40.6,869.5,94.5), new cjs.Rectangle(283.1,41.8,858.8,93.2), new cjs.Rectangle(288.2,43.5,848.1,91.6), new cjs.Rectangle(293.2,45,837.5,90), new cjs.Rectangle(298.3,45,826.8,90), new cjs.Rectangle(303.4,45,816.1,90), new cjs.Rectangle(308.4,45,805.4,90), new cjs.Rectangle(313.5,45,794.8,90), new cjs.Rectangle(318.5,45,784.1,90), new cjs.Rectangle(323.6,45,773.4,90), new cjs.Rectangle(328.6,45,763.4,90), new cjs.Rectangle(333.7,45,758.4,90), new cjs.Rectangle(338.7,45,753.3,90), new cjs.Rectangle(343.8,45,748.2,90), new cjs.Rectangle(348.9,45,743.2,90), new cjs.Rectangle(353.9,45,738.1,90), new cjs.Rectangle(359,45,733.1,90), rect=new cjs.Rectangle(364,45,728,90), rect];
// library properties:
lib.properties = {
	id: '0925C1C2766B44FEBFB65832623E938F',
	width: 728,
	height: 90,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ad1_atlas_1.png", id:"ad1_atlas_1"}
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
an.compositions['0925C1C2766B44FEBFB65832623E938F'] = {
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