print("Estudos Python sincronizados no GITHUB")

'''Criação de arquivo texto através de python'''
arquivo = open("python/maicon.txt","a")
arquivo.write("Marcone,53,Masculino\n")
arquivo.write("Maicon,21,Masculino\n")
arquivo.write("Emily,13,Masculino\n")
arquivo.close()

# arquivo = open("python/maicon.txt","r")
# linha = arquivo.readline()
# while linha:
#     print(linha)
#     linha = arquivo.readline()
# arquivo.close()

# arquivo = open("python/maicon.txt","r")
# linha = arquivo.read() #retorna numa única string
# print(linha)
# arquivo.close()

arquivo = open("python/maicon.txt","r")
for linha in arquivo:
    campo = linha.split(',')
    print('nome =',campo[0],'\tidade =',campo[1],'\tsexo',campo[2],end='')
arquivo.close()    