var compsList = [
  {
    floor: 90,
    author: "John",
    comment: "This composition is extremely safe, and can clear this floor relatively trivially. Auto can be used until the Ras, Mercedes, and Aither phase. Once at the 2nd phase of the boss fight, target down Aither using Kiris, using Arky or Kromcruz to supplement your damage. Dizzy can keep Mercedes and Aither from gaining too many turns, and keep Kiris safe. The main point of failure in this phase, is if Kiris is targeted too many times and dies. If Aither is not the “Reveal the Truth” target, the fight may also drag too long, allowing the Attack and Speed buff to become problematic, and kill off members of your team. If these happen, resetting and trying again until Aither is the target will be safer.",
    heros: ["A.Montmorancy", "Angelica", "Kiris", "Dizzy"]
  },
  {
    floor: 90,
    author: "Bob",
    comment: "A composition for players without Dizzy, featuring a relatively standard team composition. This team composition require a bit more gear, and is harder to execute properly, due to having to interact with many mechanics. ",
    heros: ["A.Montmorancy", "Angelica", "F.Kluri", "C.Lorina"]
  },
  {
    floor: 85,
    author: "Liz",
    comment: "There are two strategies, either killing the yellow crystal, and using CR manipulation to ensure Dark Corvus doesn’t get a turn after the yellow crystal is dead, or to race the enrage timer and kill him quickly. Both are viable and depend on your units. With CR manipulators like W.Silk, Lidica, C.Lorina, or Dizzy, this floor is relatively trivial. Without, running 2 strong ST DPS also makes short work of this floor. Note that Guardian %HP does not affect Dark Corvus, but does affect the crystals.",
    heros: ["Angelica", "C.Lorina", "Lidica", "Luna"]
  },
  {
    floor: 85,
    author: "Bob",
    comment: "Dark Corvus has 600k HP, and is immune to poison and %HP damage. He gains 100% bonus attack after 10 turns, and 3000% bonus attack after 20 turns. He is accompanied by a yellow crystal, which prevents Dark Corvus’ CR from being manipulated while it is alive, and a dark crystal, which prevents your teams CR from being manipulated. ",
    heros: ["Angelica", "C.Lorina", "Cidd", "Yuna"]
  }
]

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {

  // Populate 'floor' select
  var floorSelect = document.getElementById('floor');
  var minFloor = 50; // Set minimum floor to show
  var maxFloor = 100; // Set maximum floor to show
  for (var i = minFloor; i <= maxFloor; i++) {
    var opt = document.createElement("option");
    opt.text = "Floor " + i;
    opt.value = i;
    floorSelect.add(opt, floorSelect[i - minFloor]);
  }
  floorSelect.addEventListener('change', function (v) {
    var floor = v.target.value;
    console.log('Changed floor to ' + floor);
    var comps = document.getElementById('comps');
    comps.innerHTML = ""; // Cleaning up comps from other floors
    compsList.forEach(function (comp) {
      console.log(comp);
      if (comp.floor == floor) {
        var compContent = [
          '<div class="comp">',
          '<div class="author">',
          '<h5>Author: '+comp.author+'</h5>',
          '</div>',
          '<div class="heros">',
          '<div class="hero hero-1">',
          '<img src="https://via.placeholder.com/70" alt="Hero 1">',
          '<p class="hero-name">'+comp.heros[0]+'</p>',
          '</div>',
          '<div class="hero hero-2">',
          '<img src="https://via.placeholder.com/70" alt="Hero 2">',
          '<p class="hero-name">'+comp.heros[1]+'</p>',
          '</div>',
          '<div class="hero hero-3">',
          '<img src="https://via.placeholder.com/70" alt="Hero 3">',
          '<p class="hero-name">'+comp.heros[2]+'</p>',
          '</div>',
          '<div class="hero hero-4">',
          '<img src="https://via.placeholder.com/70" alt="Hero 4">',
          '<p class="hero-name">'+comp.heros[3]+'</p>',
          '</div>',
          '</div>',
          '<div class="comment">',
          '<p>'+comp.comment+'</p>',
          '</div>',
          '</div>',
        ].join('');
        comps.innerHTML += compContent;
      }
    });
    if(comps.innerHTML == "") {
      comps.innerHTML = "<h2>No comps for this floor yet!</h2>"
    }
  })

});