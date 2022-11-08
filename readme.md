# Left Block 
#### Right Forces

Olá, ajude a divulgar nossa ideia. Vamos mudar hábitos e deixar de consumir conteúdo de sites duvidosos ou declaradamente de esquerda, vamos juntos dar força a iniciativas de direita e libertárias.

Usando nossa extensão em seu navegador, você será avisado de quando acessar um site assim e serão exibidas alternativas a ele.

Caso seja desenvolvedor pode ajudar a crescer o projeto, embora minha ideia é deixar decentralizado, ou seja, qualquer um pode fazer um fork do projeto e distribuir. Também gostaria de conseguir manter uma versão principal, segura e completa.

Não conto com servidores no momento, todas listas e sites confiáveis ou não estão locais nesse projeto. Você pode contribuir enviando por e-mail para mim, ou fazendo uma pull-request aqui mesmo.

## Como adicionar sites não confiáveis

Adicione os sites que deseja localmente, altere o arquivo manifest.json, procure a marcação "// Insert links here!" e insira após o último site, siga o padrão dos asteriscos ex. "https://*.novosite.com.br/*" assim você garante pegar qualquer página ou subdomínio.

* Lembre-se, precisa atualizar a extensão após fazer isso em [chrome://extensions/](chrome://extensions/)

## Como adicionar sites confiáveis

Adicione os sites que deseja localmente, altere o arquivo www/resources/json/recommended.json.

* Lembre-se, precisa atualizar a extensão após fazer isso em [chrome://extensions/](chrome://extensions/)


## Outros arquivos
#### Todos estão em www/resources/json

* dataTable.pt-BR.json (Traduz os textos do datatable)
* not_recommended.json (Lista de sites não recomendados, porém serve apenas para aparecer na lista da página "Sobre não recomendados")
```
//Como adicionar
{
	"name": "Nome do site",
	"resume": "Justificativa breve do porque está na lista",
	"links": [
		{
			"titulo": "Alguma matéria ou algo que sirva de exemplo para justificar",
			"link": "Link recomendo que seja salvo ou resgatado de algum webarchive da vida."
		}
	]
}
```
* profiles.jon (Lista de perfis recomendados, Canais de Youtube, conta no Twitter etc.)
```
//Como adicionar
{
	"profile": "Nome do perfil",
	"links": [
		{
			"social": "Local Ex. Youtube",
			"link": "Link para a conta"
		}
	],
	"details": "Mais detalhes sobre o perfil"
}
```
* recommended.json (Lista de sites confiáveis)
```
//Como adicionar
{
	"type": "Para que exiba um icone hoje são aceito os tipos: Notícias,Meio de pagamento,Blog,Loja",
	"title": {
		"title": "Titulo do site",
		"link": "Link para o site"
	},
	"description": "Uma breve descrição"
}
```

## Autores

- [@RightForces](https://www.github.com/RightForces)
- Programador de Direita!


## Etiquetas

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
