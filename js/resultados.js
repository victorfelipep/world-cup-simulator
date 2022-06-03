$(document).ready(function(){ 

$('.start-btn').click(()=>{
	$('#start-section').toggleClass('d-none')
	$('#groups-section').toggleClass('d-none')
})
$('.results-btn').click(()=>{
	$('#groups-section').toggleClass('d-none')
	$('#playoff-section').toggleClass('d-none')
	$('.instruction').addClass('d-none')
	$('.results-btn, .continue-btn, .start-btn, .reset-btn, .replay-btn').toggleClass('d-none')
	$('*').not('.replay-btn').off('click')
})
$('.replay-btn').click(()=>{
	window.location.reload()
})

let oitavas = []
let quartas = []
let semis = []
let final = []
let grupoA = [
	{pais: 'Qatar', sigla:'QAT', bandeira:'https://flagcdn.com/w80/qa.png', pontos:0},
	{pais: 'Ecuador', sigla:'ECU', bandeira:'https://flagcdn.com/w80/ec.png', pontos:0},
	{pais: 'Senegal', sigla:'SEN', bandeira:'https://flagcdn.com/w80/sn.png', pontos:0},
	{pais: 'Netherlands', sigla:'NED', bandeira:'https://flagcdn.com/w80/nl.png', pontos:0}
]
let grupoB = [
	{pais: 'England', sigla:'ENG', bandeira:'https://countryflagsapi.com/svg/gb-eng', pontos:0},
	{pais: 'IR Iran', sigla:'IRN', bandeira:'https://flagcdn.com/w80/ir.png', pontos:0},
	{pais: 'USA', sigla:'USA', bandeira:'https://flagcdn.com/w80/us.png', pontos:0},
	{pais: 'Euro Play-off', sigla:'EUR', bandeira:'img/earth.png', pontos:0}
]
let grupoC = [
	{pais: 'Argentina', sigla:'ARG', bandeira:'https://flagcdn.com/w80/ar.png', pontos:0},
	{pais: 'Saudi Arabia', sigla:'KSA', bandeira:'https://flagcdn.com/w80/sa.png', pontos:0},
	{pais: 'Mexico', sigla:'MEX', bandeira:'https://flagcdn.com/w80/mx.png', pontos:0},
	{pais: 'Poland', sigla:'POL', bandeira:'https://flagcdn.com/w80/pl.png', pontos:0}
]
let grupoD = [
	{pais: 'France', sigla:'FRA', bandeira:'https://flagcdn.com/w80/fr.png', pontos:0},
	{pais: 'IC Play-off 1', sigla:'IC1', bandeira:'img/earth.png', pontos:0},
	{pais: 'Denmark', sigla:'DEN', bandeira:'https://flagcdn.com/w80/dk.png', pontos:0},
	{pais: 'Tunisia', sigla:'TUN', bandeira:'https://flagcdn.com/w80/tn.png', pontos:0}
]
let grupoE = [
	{pais: 'Spain', sigla:'ESP', bandeira:'https://flagcdn.com/w80/es.png', pontos:0},
	{pais: 'IC Play-off 2', sigla:'IC2', bandeira:'img/earth.png', pontos:0},
	{pais: 'Germany', sigla:'GER', bandeira:'https://flagcdn.com/w80/de.png', pontos:0},
	{pais: 'Japan', sigla:'JPN', bandeira:'https://flagcdn.com/w80/jp.png', pontos:0}
]
let grupoF = [
	{pais: 'Belgium', sigla:'BEL', bandeira:'https://flagcdn.com/w80/be.png', pontos:0},
	{pais: 'Canada', sigla:'CAN', bandeira:'https://flagcdn.com/w80/ca.png', pontos:0},
	{pais: 'Morocco', sigla:'MAR', bandeira:'https://flagcdn.com/w80/ma.png', pontos:0},
	{pais: 'Croatia', sigla:'CRO', bandeira:'https://flagcdn.com/w80/hr.png', pontos:0}
]
let grupoG = [
	{pais: 'Brazil', sigla:'BRA', bandeira:'https://flagcdn.com/w80/br.png', pontos:0},
	{pais: 'Serbia', sigla:'SRB', bandeira:'https://flagcdn.com/w80/rs.png', pontos:0},
	{pais: 'Switzerland', sigla:'SWI', bandeira:'https://flagcdn.com/w80/ch.png', pontos:0},
	{pais: 'Cameroon', sigla:'CMR', bandeira:'https://flagcdn.com/w80/cm.png', pontos:0}
]
let grupoH = [
	{pais: 'Portugal', sigla:'POR', bandeira:'https://flagcdn.com/w80/pt.png', pontos:0},
	{pais: 'Ghana', sigla:'GHA', bandeira:'https://flagcdn.com/w80/gh.png', pontos:0},
	{pais: 'Uruguay', sigla:'URU', bandeira:'https://flagcdn.com/w80/uy.png', pontos:0},
	{pais: 'Korea Republic', sigla:'KOR', bandeira:'https://flagcdn.com/w80/kr.png', pontos:0}
]

let ma = 0
grupoA.forEach(function(valor, indice){ /**** GRUPO A ****/
	let team = document.createElement('span')
	let teamText = document.createTextNode(valor.pais + ' ')
	team.appendChild(teamText)
	let flag = document.createElement('img')
	flag.setAttribute('src', valor.bandeira) 
	document.getElementById(valor.sigla).appendChild(team)
	document.getElementById(valor.sigla).appendChild(flag)

	$(`#${valor.sigla}`).click(()=>{
		
		let element = document.getElementById(valor.sigla)
		if(ma == 0){
			if(indice != 0){
				let thisElement = document.getElementById(grupoA[0].sigla)
				$(`#${grupoA[0].sigla}`).removeClass('classified-1')
				$(`#${grupoA[0].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoA[0].pontos = 0
			}
			if(indice != 1){
				let thisElement = document.getElementById(grupoA[1].sigla)
				$(`#${grupoA[1].sigla}`).removeClass('classified-1')
				$(`#${grupoA[1].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoA[1].pontos = 0
			}
			if(indice != 2){
				let thisElement = document.getElementById(grupoA[2].sigla)
				$(`#${grupoA[2].sigla}`).removeClass('classified-1')
				$(`#${grupoA[2].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoA[2].pontos = 0
			}
			if(indice != 3){
				let thisElement = document.getElementById(grupoA[3].sigla)
				$(`#${grupoA[3].sigla}`).removeClass('classified-1')
				$(`#${grupoA[3].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoA[3].pontos = 0
			}
			
			if(valor.pontos >= 1){
				element.removeChild(element.lastChild)
			}
			valor.pontos = 2
			let first = document.createElement('span')
			let firstText = document.createTextNode(' #1')
			first.appendChild(firstText)
			element.appendChild(first)
			$(`#${valor.sigla}`).removeClass('classified-2')
			$(`#${valor.sigla}`).addClass('classified-1')
			ma = 1
		}else if(ma == 1){
			if(valor.pontos != 2){
				valor.pontos = 1
				let second = document.createElement('span')
				let secondText = document.createTextNode(' #2')
				second.appendChild(secondText)
				element.appendChild(second)
				$(`#${valor.sigla}`).addClass('classified-2')
				ma = 0
			}
		}

	})
})

let mb = 0
grupoB.forEach(function(valor, indice){ /**** GRUPO B ****/
	let team = document.createElement('span')
	let teamText = document.createTextNode(valor.pais + ' ')
	team.appendChild(teamText)
	let flag = document.createElement('img')
	flag.setAttribute('src', valor.bandeira) 
	document.getElementById(valor.sigla).appendChild(team)
	document.getElementById(valor.sigla).appendChild(flag)

	$(`#${valor.sigla}`).click(()=>{
		
		let element = document.getElementById(valor.sigla)
		if(mb == 0){
			if(indice != 0){
				let thisElement = document.getElementById(grupoB[0].sigla)
				$(`#${grupoB[0].sigla}`).removeClass('classified-1')
				$(`#${grupoB[0].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoB[0].pontos = 0
			}
			if(indice != 1){
				let thisElement = document.getElementById(grupoB[1].sigla)
				$(`#${grupoB[1].sigla}`).removeClass('classified-1')
				$(`#${grupoB[1].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoB[1].pontos = 0
			}
			if(indice != 2){
				let thisElement = document.getElementById(grupoB[2].sigla)
				$(`#${grupoB[2].sigla}`).removeClass('classified-1')
				$(`#${grupoB[2].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoB[2].pontos = 0
			}
			if(indice != 3){
				let thisElement = document.getElementById(grupoB[3].sigla)
				$(`#${grupoB[3].sigla}`).removeClass('classified-1')
				$(`#${grupoB[3].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoB[3].pontos = 0
			}
			
			if(valor.pontos >= 1){
				element.removeChild(element.lastChild)
			}
			valor.pontos = 2
			let first = document.createElement('span')
			let firstText = document.createTextNode(' #1')
			first.appendChild(firstText)
			element.appendChild(first)
			$(`#${valor.sigla}`).removeClass('classified-2')
			$(`#${valor.sigla}`).addClass('classified-1')
			mb = 1
		}else if(mb == 1){
			if(valor.pontos != 2){
				valor.pontos = 1
				let second = document.createElement('span')
				let secondText = document.createTextNode(' #2')
				second.appendChild(secondText)
				element.appendChild(second)
				$(`#${valor.sigla}`).addClass('classified-2')
				mb = 0
			}
		}

	})
})

let mc = 0
grupoC.forEach(function(valor, indice){ /**** GRUPO C ****/
	let team = document.createElement('span')
	let teamText = document.createTextNode(valor.pais + ' ')
	team.appendChild(teamText)
	let flag = document.createElement('img')
	flag.setAttribute('src', valor.bandeira) 
	document.getElementById(valor.sigla).appendChild(team)
	document.getElementById(valor.sigla).appendChild(flag)

	$(`#${valor.sigla}`).click(()=>{
		
		let element = document.getElementById(valor.sigla)
		if(mc == 0){
			if(indice != 0){
				let thisElement = document.getElementById(grupoC[0].sigla)
				$(`#${grupoC[0].sigla}`).removeClass('classified-1')
				$(`#${grupoC[0].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoC[0].pontos = 0
			}
			if(indice != 1){
				let thisElement = document.getElementById(grupoC[1].sigla)
				$(`#${grupoC[1].sigla}`).removeClass('classified-1')
				$(`#${grupoC[1].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoC[1].pontos = 0
			}
			if(indice != 2){
				let thisElement = document.getElementById(grupoC[2].sigla)
				$(`#${grupoC[2].sigla}`).removeClass('classified-1')
				$(`#${grupoC[2].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoC[2].pontos = 0
			}
			if(indice != 3){
				let thisElement = document.getElementById(grupoC[3].sigla)
				$(`#${grupoC[3].sigla}`).removeClass('classified-1')
				$(`#${grupoC[3].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoC[3].pontos = 0
			}
			
			if(valor.pontos >= 1){
				element.removeChild(element.lastChild)
			}
			valor.pontos = 2
			let first = document.createElement('span')
			let firstText = document.createTextNode(' #1')
			first.appendChild(firstText)
			element.appendChild(first)
			$(`#${valor.sigla}`).removeClass('classified-2')
			$(`#${valor.sigla}`).addClass('classified-1')
			mc = 1
		}else if(mc == 1){
			if(valor.pontos != 2){
				valor.pontos = 1
				let second = document.createElement('span')
				let secondText = document.createTextNode(' #2')
				second.appendChild(secondText)
				element.appendChild(second)
				$(`#${valor.sigla}`).addClass('classified-2')
				mc = 0
			}
		}

	})
})

let md = 0
grupoD.forEach(function(valor, indice){ /**** GRUPO D ****/
	let team = document.createElement('span')
	let teamText = document.createTextNode(valor.pais + ' ')
	team.appendChild(teamText)
	let flag = document.createElement('img')
	flag.setAttribute('src', valor.bandeira) 
	document.getElementById(valor.sigla).appendChild(team)
	document.getElementById(valor.sigla).appendChild(flag)

	$(`#${valor.sigla}`).click(()=>{
		
		let element = document.getElementById(valor.sigla)
		if(md == 0){
			if(indice != 0){
				let thisElement = document.getElementById(grupoD[0].sigla)
				$(`#${grupoD[0].sigla}`).removeClass('classified-1')
				$(`#${grupoD[0].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoD[0].pontos = 0
			}
			if(indice != 1){
				let thisElement = document.getElementById(grupoD[1].sigla)
				$(`#${grupoD[1].sigla}`).removeClass('classified-1')
				$(`#${grupoD[1].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoD[1].pontos = 0
			}
			if(indice != 2){
				let thisElement = document.getElementById(grupoD[2].sigla)
				$(`#${grupoD[2].sigla}`).removeClass('classified-1')
				$(`#${grupoD[2].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoD[2].pontos = 0
			}
			if(indice != 3){
				let thisElement = document.getElementById(grupoD[3].sigla)
				$(`#${grupoD[3].sigla}`).removeClass('classified-1')
				$(`#${grupoD[3].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoD[3].pontos = 0
			}
			
			if(valor.pontos >= 1){
				element.removeChild(element.lastChild)
			}
			valor.pontos = 2
			let first = document.createElement('span')
			let firstText = document.createTextNode(' #1')
			first.appendChild(firstText)
			element.appendChild(first)
			$(`#${valor.sigla}`).removeClass('classified-2')
			$(`#${valor.sigla}`).addClass('classified-1')
			md = 1
		}else if(md == 1){
			if(valor.pontos != 2){
				valor.pontos = 1
				let second = document.createElement('span')
				let secondText = document.createTextNode(' #2')
				second.appendChild(secondText)
				element.appendChild(second)
				$(`#${valor.sigla}`).addClass('classified-2')
				md = 0
			}
		}

	})
})

let me = 0
grupoE.forEach(function(valor, indice){ /**** GRUPO E ****/
	let team = document.createElement('span')
	let teamText = document.createTextNode(valor.pais + ' ')
	team.appendChild(teamText)
	let flag = document.createElement('img')
	flag.setAttribute('src', valor.bandeira) 
	document.getElementById(valor.sigla).appendChild(team)
	document.getElementById(valor.sigla).appendChild(flag)

	$(`#${valor.sigla}`).click(()=>{
		
		let element = document.getElementById(valor.sigla)
		if(me == 0){
			if(indice != 0){
				let thisElement = document.getElementById(grupoE[0].sigla)
				$(`#${grupoE[0].sigla}`).removeClass('classified-1')
				$(`#${grupoE[0].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoE[0].pontos = 0
			}
			if(indice != 1){
				let thisElement = document.getElementById(grupoE[1].sigla)
				$(`#${grupoE[1].sigla}`).removeClass('classified-1')
				$(`#${grupoE[1].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoE[1].pontos = 0
			}
			if(indice != 2){
				let thisElement = document.getElementById(grupoE[2].sigla)
				$(`#${grupoE[2].sigla}`).removeClass('classified-1')
				$(`#${grupoE[2].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoE[2].pontos = 0
			}
			if(indice != 3){
				let thisElement = document.getElementById(grupoE[3].sigla)
				$(`#${grupoE[3].sigla}`).removeClass('classified-1')
				$(`#${grupoE[3].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoE[3].pontos = 0
			}
			
			if(valor.pontos >= 1){
				element.removeChild(element.lastChild)
			}
			valor.pontos = 2
			let first = document.createElement('span')
			let firstText = document.createTextNode(' #1')
			first.appendChild(firstText)
			element.appendChild(first)
			$(`#${valor.sigla}`).removeClass('classified-2')
			$(`#${valor.sigla}`).addClass('classified-1')
			me = 1
		}else if(me == 1){
			if(valor.pontos != 2){
				valor.pontos = 1
				let second = document.createElement('span')
				let secondText = document.createTextNode(' #2')
				second.appendChild(secondText)
				element.appendChild(second)
				$(`#${valor.sigla}`).addClass('classified-2')
				me = 0
			}
		}

	})
})

let mf = 0
grupoF.forEach(function(valor, indice){ /**** GRUPO F ****/
	let team = document.createElement('span')
	let teamText = document.createTextNode(valor.pais + ' ')
	team.appendChild(teamText)
	let flag = document.createElement('img')
	flag.setAttribute('src', valor.bandeira) 
	document.getElementById(valor.sigla).appendChild(team)
	document.getElementById(valor.sigla).appendChild(flag)

	$(`#${valor.sigla}`).click(()=>{
		
		let element = document.getElementById(valor.sigla)
		if(mf == 0){
			if(indice != 0){
				let thisElement = document.getElementById(grupoF[0].sigla)
				$(`#${grupoF[0].sigla}`).removeClass('classified-1')
				$(`#${grupoF[0].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoF[0].pontos = 0
			}
			if(indice != 1){
				let thisElement = document.getElementById(grupoF[1].sigla)
				$(`#${grupoF[1].sigla}`).removeClass('classified-1')
				$(`#${grupoF[1].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoF[1].pontos = 0
			}
			if(indice != 2){
				let thisElement = document.getElementById(grupoF[2].sigla)
				$(`#${grupoF[2].sigla}`).removeClass('classified-1')
				$(`#${grupoF[2].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoF[2].pontos = 0
			}
			if(indice != 3){
				let thisElement = document.getElementById(grupoF[3].sigla)
				$(`#${grupoF[3].sigla}`).removeClass('classified-1')
				$(`#${grupoF[3].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoF[3].pontos = 0
			}
			
			if(valor.pontos >= 1){
				element.removeChild(element.lastChild)
			}
			valor.pontos = 2
			let first = document.createElement('span')
			let firstText = document.createTextNode(' #1')
			first.appendChild(firstText)
			element.appendChild(first)
			$(`#${valor.sigla}`).removeClass('classified-2')
			$(`#${valor.sigla}`).addClass('classified-1')
			mf = 1
		}else if(mf == 1){
			if(valor.pontos != 2){
				valor.pontos = 1
				let second = document.createElement('span')
				let secondText = document.createTextNode(' #2')
				second.appendChild(secondText)
				element.appendChild(second)
				$(`#${valor.sigla}`).addClass('classified-2')
				mf = 0
			}
		}

	})
})

let mg = 0
grupoG.forEach(function(valor, indice){ /**** GRUPO G ****/
	let team = document.createElement('span')
	let teamText = document.createTextNode(valor.pais + ' ')
	team.appendChild(teamText)
	let flag = document.createElement('img')
	flag.setAttribute('src', valor.bandeira) 
	document.getElementById(valor.sigla).appendChild(team)
	document.getElementById(valor.sigla).appendChild(flag)

	$(`#${valor.sigla}`).click(()=>{
		
		let element = document.getElementById(valor.sigla)
		if(mg == 0){
			if(indice != 0){
				let thisElement = document.getElementById(grupoG[0].sigla)
				$(`#${grupoG[0].sigla}`).removeClass('classified-1')
				$(`#${grupoG[0].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoG[0].pontos = 0
			}
			if(indice != 1){
				let thisElement = document.getElementById(grupoG[1].sigla)
				$(`#${grupoG[1].sigla}`).removeClass('classified-1')
				$(`#${grupoG[1].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoG[1].pontos = 0
			}
			if(indice != 2){
				let thisElement = document.getElementById(grupoG[2].sigla)
				$(`#${grupoG[2].sigla}`).removeClass('classified-1')
				$(`#${grupoG[2].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoG[2].pontos = 0
			}
			if(indice != 3){
				let thisElement = document.getElementById(grupoG[3].sigla)
				$(`#${grupoG[3].sigla}`).removeClass('classified-1')
				$(`#${grupoG[3].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoG[3].pontos = 0
			}
			
			if(valor.pontos >= 1){
				element.removeChild(element.lastChild)
			}
			valor.pontos = 2
			let first = document.createElement('span')
			let firstText = document.createTextNode(' #1')
			first.appendChild(firstText)
			element.appendChild(first)
			$(`#${valor.sigla}`).removeClass('classified-2')
			$(`#${valor.sigla}`).addClass('classified-1')
			mg = 1
		}else if(mg == 1){
			if(valor.pontos != 2){
				valor.pontos = 1
				let second = document.createElement('span')
				let secondText = document.createTextNode(' #2')
				second.appendChild(secondText)
				element.appendChild(second)
				$(`#${valor.sigla}`).addClass('classified-2')
				mg = 0
			}
		}

	})
})

let mh = 0
grupoH.forEach(function(valor, indice){ /**** GRUPO H ****/
	let team = document.createElement('span')
	let teamText = document.createTextNode(valor.pais + ' ')
	team.appendChild(teamText)
	let flag = document.createElement('img')
	flag.setAttribute('src', valor.bandeira) 
	document.getElementById(valor.sigla).appendChild(team)
	document.getElementById(valor.sigla).appendChild(flag)

	$(`#${valor.sigla}`).click(()=>{
		
		let element = document.getElementById(valor.sigla)
		if(mh == 0){
			if(indice != 0){
				let thisElement = document.getElementById(grupoH[0].sigla)
				$(`#${grupoH[0].sigla}`).removeClass('classified-1')
				$(`#${grupoH[0].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoH[0].pontos = 0
			}
			if(indice != 1){
				let thisElement = document.getElementById(grupoH[1].sigla)
				$(`#${grupoH[1].sigla}`).removeClass('classified-1')
				$(`#${grupoH[1].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoH[1].pontos = 0
			}
			if(indice != 2){
				let thisElement = document.getElementById(grupoH[2].sigla)
				$(`#${grupoH[2].sigla}`).removeClass('classified-1')
				$(`#${grupoH[2].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoH[2].pontos = 0
			}
			if(indice != 3){
				let thisElement = document.getElementById(grupoH[3].sigla)
				$(`#${grupoH[3].sigla}`).removeClass('classified-1')
				$(`#${grupoH[3].sigla}`).removeClass('classified-2')
				if(thisElement.children.length > 2){
					thisElement.removeChild(thisElement.lastChild)
				}
				grupoH[3].pontos = 0
			}
			
			if(valor.pontos >= 1){
				element.removeChild(element.lastChild)
			}
			valor.pontos = 2
			let first = document.createElement('span')
			let firstText = document.createTextNode(' #1')
			first.appendChild(firstText)
			element.appendChild(first)
			$(`#${valor.sigla}`).removeClass('classified-2')
			$(`#${valor.sigla}`).addClass('classified-1')
			mh = 1
		}else if(mh == 1){
			if(valor.pontos != 2){
				valor.pontos = 1
				let second = document.createElement('span')
				let secondText = document.createTextNode(' #2')
				second.appendChild(secondText)
				element.appendChild(second)
				$(`#${valor.sigla}`).addClass('classified-2')
				mh = 0
			}
		}

	})
})

$('#reset-btn-1').click(()=>{
	ma = 0
	mb = 0
	mc = 0
	md = 0
	me = 0
	mf = 0
	mg = 0
	mh = 0
	grupoA.forEach(function(valor, indice){
		valor.pontos = 0
		$(`#${valor.sigla}`).removeClass('classified-1')
		$(`#${valor.sigla}`).removeClass('classified-2')
		let thisElement = document.getElementById(valor.sigla)
		if(thisElement.children.length > 2){
			thisElement.removeChild(thisElement.lastChild)
		}
	})
	grupoB.forEach(function(valor, indice){
		valor.pontos = 0
		$(`#${valor.sigla}`).removeClass('classified-1')
		$(`#${valor.sigla}`).removeClass('classified-2')
		let thisElement = document.getElementById(valor.sigla)
		if(thisElement.children.length > 2){
			thisElement.removeChild(thisElement.lastChild)
		}
	})
	grupoC.forEach(function(valor, indice){
		valor.pontos = 0
		$(`#${valor.sigla}`).removeClass('classified-1')
		$(`#${valor.sigla}`).removeClass('classified-2')
		let thisElement = document.getElementById(valor.sigla)
		if(thisElement.children.length > 2){
			thisElement.removeChild(thisElement.lastChild)
		}
	})
	grupoD.forEach(function(valor, indice){
		valor.pontos = 0
		$(`#${valor.sigla}`).removeClass('classified-1')
		$(`#${valor.sigla}`).removeClass('classified-2')
		let thisElement = document.getElementById(valor.sigla)
		if(thisElement.children.length > 2){
			thisElement.removeChild(thisElement.lastChild)
		}
	})
	grupoE.forEach(function(valor, indice){
		valor.pontos = 0
		$(`#${valor.sigla}`).removeClass('classified-1')
		$(`#${valor.sigla}`).removeClass('classified-2')
		let thisElement = document.getElementById(valor.sigla)
		if(thisElement.children.length > 2){
			thisElement.removeChild(thisElement.lastChild)
		}
	})
	grupoF.forEach(function(valor, indice){
		valor.pontos = 0
		$(`#${valor.sigla}`).removeClass('classified-1')
		$(`#${valor.sigla}`).removeClass('classified-2')
		let thisElement = document.getElementById(valor.sigla)
		if(thisElement.children.length > 2){
			thisElement.removeChild(thisElement.lastChild)
		}
	})
	grupoG.forEach(function(valor, indice){
		valor.pontos = 0
		$(`#${valor.sigla}`).removeClass('classified-1')
		$(`#${valor.sigla}`).removeClass('classified-2')
		let thisElement = document.getElementById(valor.sigla)
		if(thisElement.children.length > 2){
			thisElement.removeChild(thisElement.lastChild)
		}
	})
	grupoH.forEach(function(valor, indice){
		valor.pontos = 0
		$(`#${valor.sigla}`).removeClass('classified-1')
		$(`#${valor.sigla}`).removeClass('classified-2')
		let thisElement = document.getElementById(valor.sigla)
		if(thisElement.children.length > 2){
			thisElement.removeChild(thisElement.lastChild)
		}
	})
})

function compare(a, b){
	if (a.pontos < b.pontos) {
		return 1;
	}
  	if (a.pontos > b.pontos) {
    	return -1;
  	}
  	return 0;
}

$('.continue-btn').click(()=>{

	if(
		(grupoA[0].pontos == 1 || grupoA[1].pontos == 1 || grupoA[2].pontos == 1 || grupoA[3].pontos == 1)
		&& (grupoB[0].pontos == 1 || grupoB[1].pontos == 1 || grupoB[2].pontos == 1 || grupoB[3].pontos == 1)
		&& (grupoC[0].pontos == 1 || grupoC[1].pontos == 1 || grupoC[2].pontos == 1 || grupoC[3].pontos == 1)
		&& (grupoD[0].pontos == 1 || grupoD[1].pontos == 1 || grupoD[2].pontos == 1 || grupoD[3].pontos == 1)
		&& (grupoE[0].pontos == 1 || grupoE[1].pontos == 1 || grupoE[2].pontos == 1 || grupoE[3].pontos == 1)
		&& (grupoF[0].pontos == 1 || grupoF[1].pontos == 1 || grupoF[2].pontos == 1 || grupoF[3].pontos == 1)
		&& (grupoG[0].pontos == 1 || grupoG[1].pontos == 1 || grupoG[2].pontos == 1 || grupoG[3].pontos == 1)
		&& (grupoH[0].pontos == 1 || grupoH[1].pontos == 1 || grupoH[2].pontos == 1 || grupoH[3].pontos == 1)
	){
		grupoA.sort(compare)
		grupoB.sort(compare)
		grupoC.sort(compare)
		grupoD.sort(compare)
		grupoE.sort(compare)
		grupoF.sort(compare)
		grupoG.sort(compare)
		grupoH.sort(compare)

		oitavas.push([grupoA[0], grupoB[1]])
		oitavas.push([grupoC[0], grupoD[1]])
		oitavas.push([grupoE[0], grupoF[1]])
		oitavas.push([grupoG[0], grupoH[1]])
		oitavas.push([grupoB[0], grupoA[1]])
		oitavas.push([grupoD[0], grupoC[1]])
		oitavas.push([grupoF[0], grupoE[1]])
		oitavas.push([grupoH[0], grupoG[1]])

		oitavas[0].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('r16-0-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('r16-0-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#r16-0-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = oitavas[0][1].pontos + 1
					$('#r16-0-1').removeClass('selected')
					$('#r16-0-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = oitavas[0][0].pontos + 1
					$('#r16-0-1').addClass('selected')
					$('#r16-0-0').removeClass('selected')
				}
			})
		})
		oitavas[1].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('r16-1-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('r16-1-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#r16-1-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = oitavas[1][1].pontos + 1
					$('#r16-1-1').removeClass('selected')
					$('#r16-1-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = oitavas[1][0].pontos + 1
					$('#r16-1-1').addClass('selected')
					$('#r16-1-0').removeClass('selected')
				}
			})
		})
		oitavas[2].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('r16-2-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('r16-2-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#r16-2-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = oitavas[2][1].pontos + 1
					$('#r16-2-1').removeClass('selected')
					$('#r16-2-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = oitavas[2][0].pontos + 1
					$('#r16-2-1').addClass('selected')
					$('#r16-2-0').removeClass('selected')
				}
			})
		})
		oitavas[3].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('r16-3-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('r16-3-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#r16-3-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = oitavas[3][1].pontos + 1
					$('#r16-3-1').removeClass('selected')
					$('#r16-3-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = oitavas[3][0].pontos + 1
					$('#r16-3-1').addClass('selected')
					$('#r16-3-0').removeClass('selected')
				}
			})
		})
		oitavas[4].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('r16-4-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('r16-4-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#r16-4-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = oitavas[4][1].pontos + 1
					$('#r16-4-1').removeClass('selected')
					$('#r16-4-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = oitavas[4][0].pontos + 1
					$('#r16-4-1').addClass('selected')
					$('#r16-4-0').removeClass('selected')
				}
			})
		})
		oitavas[5].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('r16-5-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('r16-5-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#r16-5-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = oitavas[5][1].pontos + 1
					$('#r16-5-1').removeClass('selected')
					$('#r16-5-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = oitavas[5][0].pontos + 1
					$('#r16-5-1').addClass('selected')
					$('#r16-5-0').removeClass('selected')
				}
			})
		})
		oitavas[6].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('r16-6-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('r16-6-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#r16-6-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = oitavas[6][1].pontos + 1
					$('#r16-6-1').removeClass('selected')
					$('#r16-6-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = oitavas[6][0].pontos + 1
					$('#r16-6-1').addClass('selected')
					$('#r16-6-0').removeClass('selected')
				}
			})
		})
		oitavas[7].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('r16-7-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('r16-7-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#r16-7-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = oitavas[7][1].pontos + 1
					$('#r16-7-1').removeClass('selected')
					$('#r16-7-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = oitavas[7][0].pontos + 1
					$('#r16-7-1').addClass('selected')
					$('#r16-7-0').removeClass('selected')
				}
			})
		})

		$('#groups-section').toggleClass('d-none')
		$('#playoff-section').toggleClass('d-none')
	}else{
		alert('Select all the 2 qualified teams from each group')
	}
})

let delay = 50
$('#r16-0-0, #r16-0-1, #r16-1-0, #r16-1-1, #r16-2-0, #r16-2-1, #r16-3-0, #r16-3-1, #r16-4-0, #r16-4-1, #r16-5-0, #r16-5-1, #r16-6-0, #r16-6-1, #r16-7-0, #r16-7-1').click(()=>{

	setTimeout(()=>{
		if(
			($('#r16-0-0').hasClass('selected') || $('#r16-0-1').hasClass('selected'))
			&& ($('#r16-1-0').hasClass('selected') || $('#r16-1-1').hasClass('selected'))
			&& ($('#r16-2-0').hasClass('selected') || $('#r16-2-1').hasClass('selected'))
			&& ($('#r16-3-0').hasClass('selected') || $('#r16-3-1').hasClass('selected'))
			&& ($('#r16-4-0').hasClass('selected') || $('#r16-4-1').hasClass('selected'))
			&& ($('#r16-5-0').hasClass('selected') || $('#r16-5-1').hasClass('selected'))
			&& ($('#r16-6-0').hasClass('selected') || $('#r16-6-1').hasClass('selected'))
			&& ($('#r16-7-0').hasClass('selected') || $('#r16-7-1').hasClass('selected'))
		){
			$('#done-btn-1').toggleClass('d-none')
		}
	}, delay)

})

$('#done-btn-1').click(()=>{
	$('#r16-0-0, #r16-0-1, #r16-1-0, #r16-1-1, #r16-2-0, #r16-2-1, #r16-3-0, #r16-3-1, #r16-4-0, #r16-4-1, #r16-5-0, #r16-5-1, #r16-6-0, #r16-6-1, #r16-7-0, #r16-7-1').off('click')

	oitavas[0].sort(compare)
	oitavas[1].sort(compare)
	oitavas[2].sort(compare)
	oitavas[3].sort(compare)
	oitavas[4].sort(compare)
	oitavas[5].sort(compare)
	oitavas[6].sort(compare)
	oitavas[7].sort(compare)

	quartas.push([oitavas[0][0], oitavas[1][0]])
	quartas.push([oitavas[2][0], oitavas[3][0]])
	quartas.push([oitavas[4][0], oitavas[5][0]])
	quartas.push([oitavas[6][0], oitavas[7][0]])
	
		quartas[0].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('qf-0-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('qf-0-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#qf-0-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = quartas[0][1].pontos + 1
					$('#qf-0-1').removeClass('selected')
					$('#qf-0-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = quartas[0][0].pontos + 1
					$('#qf-0-1').addClass('selected')
					$('#qf-0-0').removeClass('selected')
				}
			})
		})
		quartas[1].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('qf-1-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('qf-1-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#qf-1-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = quartas[1][1].pontos + 1
					$('#qf-1-1').removeClass('selected')
					$('#qf-1-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = quartas[1][0].pontos + 1
					$('#qf-1-1').addClass('selected')
					$('#qf-1-0').removeClass('selected')
				}
			})
		})
		quartas[2].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('qf-2-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('qf-2-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#qf-2-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = quartas[2][1].pontos + 1
					$('#qf-2-1').removeClass('selected')
					$('#qf-2-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = quartas[2][0].pontos + 1
					$('#qf-2-1').addClass('selected')
					$('#qf-2-0').removeClass('selected')
				}
			})
		})
		quartas[3].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('qf-3-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('qf-3-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#qf-3-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = quartas[3][1].pontos + 1
					$('#qf-3-1').removeClass('selected')
					$('#qf-3-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = quartas[3][0].pontos + 1
					$('#qf-3-1').addClass('selected')
					$('#qf-3-0').removeClass('selected')
				}
			})
		})
		

	$('#done-btn-1').toggleClass('d-none')
})

$('#qf-0-0, #qf-0-1, #qf-1-0, #qf-1-1, #qf-2-0, #qf-2-1, #qf-3-0, #qf-3-1').click(()=>{
	
	setTimeout(()=>{
		if(
			($('#qf-0-0').hasClass('selected') || $('#qf-0-1').hasClass('selected'))
			&& ($('#qf-1-0').hasClass('selected') || $('#qf-1-1').hasClass('selected'))
			&& ($('#qf-2-0').hasClass('selected') || $('#qf-2-1').hasClass('selected'))
			&& ($('#qf-3-0').hasClass('selected') || $('#qf-3-1').hasClass('selected'))
		){
			$('#done-btn-2').toggleClass('d-none')
		}
	}, delay)

})

$('#done-btn-2').click(()=>{
	$('#qf-0-0, #qf-0-1, #qf-1-0, #qf-1-1, #qf-2-0, #qf-2-1, #qf-3-0, #qf-3-1').off('click')

	quartas[0].sort(compare)
	quartas[1].sort(compare)
	quartas[2].sort(compare)
	quartas[3].sort(compare)

	semis.push([quartas[0][0], quartas[1][0]])
	semis.push([quartas[2][0], quartas[3][0]])

	semis[0].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('sf-0-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('sf-0-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#sf-0-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = semis[0][1].pontos + 1
					$('#sf-0-1').removeClass('selected')
					$('#sf-0-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = semis[0][0].pontos + 1
					$('#sf-0-1').addClass('selected')
					$('#sf-0-0').removeClass('selected')
				}
			})
		})
		semis[1].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('sf-1-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('sf-1-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#sf-1-${indice}`).click(()=>{
				if(indice == 0){
					valor.pontos = semis[1][1].pontos + 1
					$('#sf-1-1').removeClass('selected')
					$('#sf-1-0').addClass('selected')
				}else if(indice == 1){
					valor.pontos = semis[1][0].pontos + 1
					$('#sf-1-1').addClass('selected')
					$('#sf-1-0').removeClass('selected')
				}
			})
		})

		$('#done-btn-2').toggleClass('d-none')
})

$('#sf-0-0, #sf-0-1, #sf-1-0, #sf-1-1').click(()=>{
	
	setTimeout(()=>{
		if(
			($('#sf-0-0').hasClass('selected') || $('#sf-0-1').hasClass('selected'))
			&& ($('#sf-1-0').hasClass('selected') || $('#sf-1-1').hasClass('selected'))
		){
			$('#done-btn-3').toggleClass('d-none')
		}
	}, delay)

})

$('#done-btn-3').click(()=>{
	$('#sf-0-0, #sf-0-1, #sf-1-0, #sf-1-1').off('click')

	semis[0].sort(compare)
	semis[1].sort(compare)

	final.push([semis[0][0], semis[1][0]])

	final[0].forEach(function(valor, indice){
			if(indice == 0){
				let element = document.getElementById('fn-0-0')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(sigla)
				element.appendChild(flag)
			}else if(indice == 1){
				let element = document.getElementById('fn-0-1')
				let sigla = document.createElement('span')
				let siglaText = document.createTextNode(valor.sigla)
				sigla.appendChild(siglaText)
				let flag = document.createElement('img')
				flag.setAttribute('src', valor.bandeira)
				element.appendChild(flag)
				element.appendChild(sigla)
			}

			$(`#fn-0-${indice}`).click(()=>{
				if(indice == 0){
					$('#winner').html(final[0][0].pais)
				}else if(indice == 1){
					$('#winner').html(final[0][1].pais)
				}
				$('#playoff-section').toggleClass('d-none')
				$('#winner-section').toggleClass('d-none')
			})
		})


	$('#done-btn-3').toggleClass('d-none')
})

$('#reset-btn-2').click(()=>{
	window.location.reload()
})

})

