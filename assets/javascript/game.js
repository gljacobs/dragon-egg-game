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
    })
});
