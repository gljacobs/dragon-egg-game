$(document).ready(function() {

    var game = {
        goal: null,
        gold: 0,
        wins: 0,
        losses: 0,
        reset: function(){
            this.goal = Math.floor(Math.random() * 50 + 100);
            this.gold = 0;

            $("#goal").text(this.goal);
            $("#score").text(this.gold);

            $("#green-egg").val("1")
            $("#red-egg").val("" + Math.floor(Math.random() * 10 + 10));
            $("#gold-egg").val("" + Math.floor(Math.random() * 10 + 20));
            $("#mystic-egg").val("" + Math.floor(Math.random() * 10 + 30));
        }
    }

    game.reset();

    console.log($("#red-egg").val());
    
    $(".egg").on("click", function(){
        game.gold += parseInt($(this).val());
        $("#score").text(game.gold);
        if(game.gold === game.goal){
            game.wins++;
            $("#wins").text("Wins: " + game.wins);
            game.reset();
            alert("Congrats, you are quite the Dragon Egg Hunter!")
        }
        if(game.gold > game.goal){
            game.losses++;
            $("#losses").text("Losses: " + game.losses);
            game.reset();
            alert("You lose, it seems like you over did it hunting for Dragon Eggs.")
        }
    })
});
