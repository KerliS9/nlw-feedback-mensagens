FROM node:16 AS server
# a tecnologia base para esta container

WORKDIR /src
# pasta raiz do container

COPY package.json .
# copia o package json para o arquivo definido ao lado direito, neste caso, o caminho definido na workdir

RUN npm install
# instala as dependências

COPY . .
# as informações que estão dentro da pasta definida a esquerda serão copiadas para o lado direito conforme o caminho definido

RUN npm run build
# cria uma pasta para ser publicada na internet - deploy

CMD ["npm", "start"]
# para iniciar o projeto depois de baixar
