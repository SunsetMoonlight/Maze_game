var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3c7d934a-8d0e-4ef5-b3ae-162c2eb597a7","f929a3fd-ad18-4823-80b7-ee4512465c0b","c772a65e-9e45-4ce8-8cf9-60b13244b49d"],"propsByKey":{"3c7d934a-8d0e-4ef5-b3ae-162c2eb597a7":{"name":"exit","sourceUrl":null,"frameSize":{"x":80,"y":73},"frameCount":1,"looping":true,"frameDelay":12,"version":"QDrIbT5WATH0y.sNyquYMj1T7xyqatQQ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":80,"y":73},"rootRelativePath":"assets/3c7d934a-8d0e-4ef5-b3ae-162c2eb597a7.png"},"f929a3fd-ad18-4823-80b7-ee4512465c0b":{"name":"gem","sourceUrl":null,"frameSize":{"x":26,"y":24},"frameCount":1,"looping":true,"frameDelay":12,"version":"565poo2uWV1ykmyVW1J.QjOy.a.UlLhk","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":24},"rootRelativePath":"assets/f929a3fd-ad18-4823-80b7-ee4512465c0b.png"},"c772a65e-9e45-4ce8-8cf9-60b13244b49d":{"name":"backdropmaze","sourceUrl":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/In3iY920nuOrZ0JmAOQbuVG8j8D4iTGD/category_backgrounds/background_cave.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var maze = createSprite(200, 200);
maze.setAnimation("backdropmaze");

var player = createSprite(45, 45, 15, 15);
player.shapeColor = "yellow";

var outline1 = createSprite(7, 200, 15, 400);
outline1.shapeColor = "red";

var outline2 = createSprite(200, 7, 400, 15);
outline2.shapeColor = "red";

var outline3 = createSprite(397, 200, 15, 400);
outline3.shapeColor = "red";

var outline4 = createSprite(200, 397, 400, 15);
outline4.shapeColor = "red";

var wall1 = createSprite(100, 150, 15, 300);
wall1.shapeColor = "red";

var wall2 = createSprite(190, 300, 15, 350);
wall2.shapeColor = "red";

var wall3 = createSprite(285, 170, 15, 330);
wall3.shapeColor = "red";

var wall4 = createSprite(318, 260, 52, 15);
wall4.shapeColor = "red";

var wall5 = createSprite(363, 200, 53, 15);
wall5.shapeColor = "red";

var wall6 = createSprite(319, 145, 53, 15);
wall6.shapeColor = "red";

var exit = createSprite(335, 40, 15, 15);
exit.setAnimation("exit");

var gem = createSprite(302, 278, 15, 15);
gem.setAnimation("gem");



function draw() {
  background("black");
  if (keyDown("up")) {
    player.y =player.y + -3;
  }
  if (keyDown("down")) {
    player.y =player.y + 3;
  }
  if (keyDown("right")) {
    player.x =player.x + 3;
  }
  if (keyDown("left")) {
    player.x =player.x + -3;
  }
  if (player.isTouching(outline1)) {
    player.x = 45;
    player.y = 45;
  }
  if (player.isTouching(outline2)) {
    player.x = 45;
    player.y = 45;
  }
  if (player.isTouching(outline3)) {
    player.x = 45;
    player.y = 45;
  }
  if (player.isTouching(outline4)) {
    player.x = 45;
    player.y = 45;
  }
  if (player.isTouching(wall1)) {
    player.x = 45;
    player.y = 45;
  }
  if (player.isTouching(wall2)) {
    player.x = 45;
    player.y = 45;
  }
  if (player.isTouching(wall3)) {
    player.x = 45;
    player.y = 45;
  }
  if (player.isTouching(wall4)) {
    player.x = 45;
    player.y = 45;
  }
  if (player.isTouching(wall5)) {
    player.x = 45;
    player.y = 45;
  }
  if (player.isTouching(wall6)) {
    player.x = 45;
    player.y = 45;
  }
  if (player.isTouching(gem)) {
    gem.visible = false;
  }
  if (player.isTouching(exit)) {
    player.visible = false;
  }
  createEdgeSprites();
  player.bounceOff(edges);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
