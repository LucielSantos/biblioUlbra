
LINK: https://github.com/heitor-gia/BiblioUlbra/blob/master/data/src/main/java/com/hgianastasio/biblioulbrav2/data/network/BiblioUlbraApi.java

# baseURL:
http://www.ulbratorres.com.br/biblioUlbra/

# Histórico de Livros Alugados pelo Usuário:

- Params: ?funcao=h&cgu=xxxxxxxx
```
    return:
    [
        {
            titulo: 'title',
            agendado: 'DD/MM/YYYY',
            devolvido: 'DD/MM/YYYY',
            biblioteca: 'city'
        },
        ...
    ]
```

# Livros Alugados do Usuário no Momento:
- Prams: ?funcao=e&cgu=xxxxxxxxx
```
    return:
    [
        {
            titulo:  'title',
            agendado: 'DD/MM/YYYY',
            taxa: 'double',
            biblioteca: 'city',
            chamada: 'string'
            descricao: 'desciption'
        },
        ...
    ]
```

# Dados do Usuário:
- Params: ?funcao=l&cgu=xxxxxxxxx
```
    return:
    {
        usuario: 'nameUser',
        emprestimos: 'int',
        historico: 'int',
        caixa: 'double',
        reservas: 'int'
    }
```

# Não sei a finalidade!
- Params: ?funcao=r&cgu=xxxxxxxxx
```
    return:
    {
        renovado: 'sim/nao'
        razao: 'string'
    }
```

# Buscar Livros
- Params:
    - ## ?funcao=r *
    - ## busca='string' *
    - ## mater= 

        | codigo | nome |
        |--------|------|
        |    ""  | "Todos" |
        | "IMPRE" | "Livro/Folheto/TCC/Tese/Diss/Monog" |
        | "ISSUE" | "Periódico" |
        | "CD" | "CD sonoro" |
        | "CDROM" | "CD-ROM" |
        | "DIAP" | "Diapositivo" |
        | "DISQ" | "Disquete" |
        | "DVD" | "DVD" |
        | "K7" | Fita cassete" |
        | "MAPA" | "Mapa/Globo" |
        | "VIDEO" | "Vídeo" |

    - ## local=

        | nome | codigo |
        |------|--------|
        | "Todas Bibliotecas da ULBRA" | "ULB01"
        | "Campus Canoas" | "CANOAS" |
        | "Campus Cachoeira do Sul" | "CACHOEIRA" |
        | 3,"Campus Carazinho" | "CARAZINHO" |
        | "GCampus Guaíba" | "GUAIBA" |
        | "Campus Porto Alegre" | "PORTOALEGRE" |
        | "Campus Santa Maria" | "SANTAMARIA" |
        | "Campus São Jerônimo" | "SAOJER" |
        | "Campus Torres" | "TORRES" |
        | "Hospital Universitário de Canoas" | "HUC" |
        | "Seminário Concórdia" | "SCONCORDIA" |
        | "Centro Universitário de Ji-Paraná" | "JIPARANA" |
        | "Centro Universitário de Manaus" | "MANAUS" |
        | "Centro Universitário de Palmas" | "PALMAS" |
        | "Centro Universitário de Santarém" | "SANTAREM" |
        | "ILES de Itumbiara" | "ITUMBIARA" |
        | "ILES de Porto Velho" | "PORTOVELHO" |
        | "UE Concórdia" | "CONCORDIA" |
        | "UE Cristo Redentor" | "CRISTO" |
        | "UE Especial Concórdia" | "ESP-CONCORDIA" |
        | "UE Martinho Lutero" | "UEML" |
        | "UE Paz" | "PAZ" |
        | "UE São João" | "SAOJOAO" |
        | "UE São Lucas" | "SAOLUCAS" |
        | "UE São Marcos" | "SAOMARCOS" |
        | "UE São Mateus" | "SAOMATEUS" |
        | "UE São Pedro" | "SAOPEDRO" |
        | "UE CEML" | "CEML" |
        | "UE Escola Aplicação" | "APLICACAO" |
        | "UE Colégio Antares" | "ANTARES" |
        | "UE CEDUCS" | "CEDUCS" |
        | "UE CEDUSP" | "CEDUSP" |
        | "Livros, Folhetos, Obras de Referência" | "LIVRO" |
        | "Periódicos, Revistas, Jornais" | "PERIODICO" |
        | "Multimeios (Materiais Especiais)" | "MULTIMEIO" |
        | "TCCs - Trabalhos de Conclusão de Cursos" | "TCC" |
        | "Monografias de Especialização" | "MONO" |
        | "Teses e Dissertações" | "TESE" |
        | "BDMONO - Monografias de Especialização On-line" | "BDMONO" |
        | "BDTD - Teses e Dissertações On-line" | "BDTESE" |
        | "Artigos de Periódicos" | "ARTIGO" |
        | "Produção Científica" | "PRODCIENT" |
        | "Normas Técnicas" | "NORMA" |
        | "Bases de Dados" | "BASEDADOS" |
        | "Documentos On-line" | "ONLINE" |

    - ## campo=

        | codigo | nome |
        |--------|------|
        | "WAU" | "Autor" |
        | "WSU" | "Assunto" |
        | "WRD" | "Todos os campos" |
        | "WSE" | "Série" |
        | "WTE" | "Nota Tese/Diss/Monog" |
        | "BAR" | "Código de Barras" |

    - ## cookie= 'string'

    - ## pag= 'string'

    - ## return:
    
        ```
        {
            cookie: 'string'
            codigo: 'int'
            itens: 'int'
            paginas: int
            pagina: int
            resultados: [
                {
                    numero: 'int',
                    autor: 'string',
                    titulo: 'sttring',
                    ano: 'int',
                    exsemprestados: 'string'
                }
                ...
            ]
        }
        ```


* *(obrigatórios);
* default: 'todos'.
