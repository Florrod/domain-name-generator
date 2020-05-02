function getDomain() {
    var pronoun = ['the', 'our', 'your', 'their'];
    var adj = ['great', 'big', 'small', 'smart'];
    var noun = ['jogger', 'racoon', 'sneaker', 'glasses'];
    var allDomain = [];

    for (let i = 0; i < pronoun.length; i++) {
        for (let k = 0; k < adj.length; k++) {
            for (let j = 0; j < noun.length; j++) {
             /*allDomain.push(pronoun[i]+adj[k]+noun[j].concat('.com', "<br>")); otra posibilidad para que el bucle no se rompa con el return*/
             document.getElementById('domain').appendChild(document.createElement('p')).innerHTML = pronoun[i]+adj[k]+noun[j] + '.com';
            }
        }
    }
    return(allDomain.join(' '));
}
window.onload = getDomain; 

/* sustituimos esto por wl window.onload = getdomain

function onLoad() {
    document.getElementById('domain').innerHTML = getDomain();
}

window.onload = onLoad;
*/