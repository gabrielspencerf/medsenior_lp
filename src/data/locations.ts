import { LocationData } from '../types';

export const locations: Record<string, LocationData> = {
    // PARANÁ (CURITIBA)
    Curitiba: {
        name: "Curitiba",
        slug: "curitiba",
        hero: {
            title: "MedSênior",
            subtitle: "44+",
            image: "/images/hero/curitiba_medsenior.webp",
            badge: "Unidade Própria",
            differential: {
                title: "Diferencial Curitiba",
                text: "Unidade própria com Oficinas de Arte e Terapia e Medicina Preventiva."
            }
        },
        plans: [
            {
                id: 1,
                name: "Essencial",
                badge: "Custo x Benefício",
                priceDesc: "Enfermaria | ANS 494.303/23-1",
                description: "Para quem quer qualidade sem pesar no bolso. O Essencial Enfermaria entrega ótimo custo-benefício, boa cobertura na rede credenciada e atendimento com padrão MedSênior.",
                area: "Curitiba (PR)",
                highlight: false
            },
            {
                id: 2,
                name: "PR3",
                badge: "Rede Ampla",
                priceDesc: "Enfermaria | ANS 492.174/22-7",
                description: "Rede credenciada maior com mensalidade ainda acessível. O MedSênior PR3 Enfermaria amplia a cobertura ambulatorial e hospitalar, com médicos de referência à disposição.",
                area: "Campo Largo (PR), Curitiba (PR) e São José dos Pinhais (PR)",
                highlight: false
            },
            {
                id: 3,
                name: "PR4",
                badge: "Privacidade",
                priceDesc: "Apartamento | ANS 492.173/22-9",
                description: "Plano em apartamento para quem prioriza privacidade nas internações, com rede credenciada ampla e foco em recuperação mais tranquila e confortável.",
                area: "Campo Largo (PR), Curitiba (PR) e São José dos Pinhais (PR)",
                highlight: false
            },
            {
                id: 4,
                name: "Black",
                badge: "Premium",
                priceDesc: "Apartamento | ANS 502.795/25-1",
                description: "Segmento premium da MedSênior, com hospitais e clínicas de primeira linha, suporte a procedimentos complexos e atendimento mais personalizado.",
                area: "DF, ES, MG, PR, RJ, RS, SP e PE",
                highlight: true
            }
        ],
        network: [
            {
                title: "Hospitais Destaque",
                icon: "hospital",
                items: [
                    { name: "Hospital Santa Casa de Curitiba" },
                    { name: "Hospital XV" },
                    { name: "Hospital Vita (Curitiba e Batel)" },
                    { name: "Hospital e Maternidade Brígida" },
                    { name: "Hospital Ônix Batel" }
                ]
            },
            {
                title: "Laboratórios",
                icon: "lab",
                items: [
                    { name: "Frischmann Aisengart" },
                    { name: "Lanac Laboratório" },
                    { name: "DAPI Diagnóstico" },
                    { name: "CETAC" }
                ]
            },
            {
                title: "Unidade Própria",
                icon: "own",
                description: "Estrutura exclusiva para clientes MedSênior com foco em envelhecimento saudável.",
                features: [
                    "Unidade MedSênior Curitiba",
                    "Oficinas de Arte e Terapia",
                    "Programas de Nutrição"
                ]
            }
        ]
    },

    // SÃO PAULO
    "São Paulo": {
        name: "São Paulo",
        slug: "sao-paulo",
        hero: {
            title: "MedSênior",
            subtitle: "44+",
            image: "/images/hero/sao_paulo_medsenior.webp",
            badge: "Rede Credenciada Premium",
            differential: {
                title: "Diferencial SP",
                text: "Pronto Atendimento Virtual e Oficinas de Saúde nas unidades próprias."
            }
        },
        plans: [
            {
                id: 1,
                name: "Essencial",
                badge: "Custo x Benefício",
                priceDesc: "Enfermaria | ANS 494.081/22-4",
                description: "Opção de entrada com foco em preço competitivo e boa cobertura na rede credenciada de São Paulo, mantendo padrão de qualidade no atendimento.",
                area: "São Paulo (SP)",
                highlight: false
            },
            {
                id: 2,
                name: "SP3",
                badge: "Rede Ampla",
                priceDesc: "Enfermaria | ANS 502.801/25-9",
                description: "Plano em enfermaria com rede ampliada. Ideal para quem quer mais opções de hospitais e médicos em São Paulo e região metropolitana pagando um valor ainda acessível.",
                area: "Guarulhos, Osasco, Santo André, São Bernardo do Campo, São Caetano do Sul, São Paulo, Campinas e Indaiatuba",
                highlight: false
            },
            {
                id: 3,
                name: "SP4",
                badge: "Privacidade",
                priceDesc: "Apartamento | ANS 502.800/25-1",
                description: "Versão em apartamento do plano regional, oferecendo quarto individual nas internações, rede ampla e mais conforto no período de recuperação.",
                area: "Guarulhos, Osasco, Santo André, São Bernardo do Campo, São Caetano do Sul, São Paulo, Campinas e Indaiatuba",
                highlight: false
            },
            {
                id: 4,
                name: "Black",
                badge: "Premium",
                priceDesc: "Apartamento | ANS 502.794/25-2",
                description: "Plano topo de linha, com rede hospitalar selecionada, suporte a procedimentos de alta complexidade e atendimento diferenciado para o público 44+.",
                area: "DF, ES, MG, PR, RJ, RS, SP e PE",
                highlight: true
            }
        ],
        network: [
            {
                title: "Hospitais Destaque",
                icon: "hospital",
                items: [
                    { name: "Hospital Santa Virgínia" },
                    { name: "Hospital Sepaco" },
                    { name: "Hospital Leforte Morumbi" },
                    { name: "Hospital Santa Paula" },
                    { name: "Hospital Alvorada Moema" },
                    { name: "Hospital Santa Marcelina" }
                ]
            },
            {
                title: "Laboratórios",
                icon: "lab",
                items: [
                    { name: "A+ (Grupo Fleury)" },
                    { name: "CDB - Centro de Diagnósticos Brasil" },
                    { name: "Femme Laboratório da Mulher" },
                    { name: "Hermes Pardini" }
                ]
            },
            {
                title: "Diferenciais",
                icon: "own",
                description: "Infraestrutura focada no cuidado preventivo.",
                features: [
                    "Oficinas de Saúde",
                    "Central de Inteligência e Monitoramento",
                    "Pronto Atendimento Virtual"
                ]
            }
        ]
    },

    // BELO HORIZONTE
    "Belo Horizonte": {
        name: "Belo Horizonte",
        slug: "belo-horizonte",
        hero: {
            title: "MedSênior",
            subtitle: "44+",
            image: "/images/hero/belo_horizonte_medsenior.webp",
            badge: "Estrutura Completa",
            differential: {
                title: "Diferencial BH",
                text: "Centro de Oncologia próprio e Unidades de Pronto Atendimento 24h."
            }
        },
        plans: [
            {
                id: 1,
                name: "Essencial",
                badge: "Custo x Benefício",
                priceDesc: "Enfermaria | ANS 493.678/22-7",
                description: "Plano pensado para quem quer qualidade com mensalidade mais leve, reunindo bom custo-benefício e cobertura adequada na rede credenciada da região.",
                area: "Belo Horizonte (MG) e Contagem (MG)",
                highlight: false
            },
            {
                id: 2,
                name: "MG3",
                badge: "Rede Ampla",
                priceDesc: "Enfermaria | ANS 492.178/22-0",
                description: "Enfermaria com rede credenciada ampliada em BH, Betim e Contagem, garantindo mais opções de consulta, exame e internação com médicos de referência.",
                area: "Belo Horizonte (MG), Betim (MG) e Contagem (MG)",
                highlight: false
            },
            {
                id: 3,
                name: "MG4",
                badge: "Privacidade",
                priceDesc: "Apartamento | ANS 492.177/22-1",
                description: "Plano em apartamento que oferece mais privacidade durante internações, mantendo a mesma rede ampla e foco em conforto e segurança na recuperação.",
                area: "Belo Horizonte (MG), Betim (MG) e Contagem (MG)",
                highlight: false
            },
            {
                id: 4,
                name: "Black",
                badge: "Premium",
                priceDesc: "Apartamento | ANS 502.795/25-1",
                description: "Categoria premium para quem busca o máximo em estrutura, rede hospitalar robusta e maior personalização no cuidado médico.",
                area: "DF, ES, MG, PR, RJ, RS, SP e PE",
                highlight: true
            }
        ],
        network: [
            {
                title: "Hospitais Destaque",
                icon: "hospital",
                items: [
                    { name: "Rede Mater Dei (Betim e Sto. Agostinho)" },
                    { name: "Hospital Belo Horizonte" },
                    { name: "Hospital Octaviano Neves" }
                ]
            },
            {
                title: "Laboratórios",
                icon: "lab",
                items: [
                    { name: "Hermes Pardini" },
                    { name: "Laboratório São Marcos" },
                    { name: "Laboratório MedSênior (Coleta Domiciliar)" }
                ]
            },
            {
                title: "Unidades Próprias",
                icon: "own",
                description: "Rede própria robusta para atendimento de urgência e tratamentos.",
                features: [
                    "PS 24h Pampulha",
                    "PS 24h Gutierrez",
                    "Centro de Oncologia MedSênior",
                    "Unidade Eldorado"
                ]
            }
        ]
    },

    // BRASÍLIA / DF
    "Brasília": {
        name: "Brasília",
        slug: "brasilia",
        hero: {
            title: "MedSênior",
            subtitle: "44+",
            image: "/images/hero/brasilia_medsenior.webp",
            badge: "Especialidades Próprias",
            differential: {
                title: "Diferencial DF",
                text: "Centro Oftalmológico exclusivo e Prontos-Socorros 24h no SIG e Taguatinga."
            }
        },
        plans: [
            {
                id: 1,
                name: "Essencial",
                badge: "Custo x Benefício",
                priceDesc: "Enfermaria | ANS 493.496/22-2",
                description: "Entrada da linha MedSênior no DF, indicada para quem busca cobertura de qualidade com preço mais enxuto e rede credenciada essencial na região.",
                area: "Distrito Federal",
                highlight: false
            },
            {
                id: 2,
                name: "DF3",
                badge: "Rede Ampla",
                priceDesc: "Enfermaria | ANS 485.895/20-6",
                description: "Plano em enfermaria com rede credenciada ampliada no Distrito Federal, oferecendo maior disponibilidade de especialistas e hospitais.",
                area: "Distrito Federal",
                highlight: false
            },
            {
                id: 3,
                name: "DF4",
                badge: "Privacidade",
                priceDesc: "Apartamento | ANS 485.900/20-6",
                description: "Versão em apartamento voltada para quem valoriza privacidade nas internações, com estrutura pensada para uma recuperação mais tranquila.",
                area: "Distrito Federal",
                highlight: false
            },
            {
                id: 4,
                name: "Black",
                badge: "Premium",
                priceDesc: "Apartamento | ANS 502.795/25-1",
                description: "Plano Black com foco em cuidados avançados, rede de hospitais de alto padrão e suporte para cirurgias e tratamentos mais complexos.",
                area: "DF, ES, MG, PR, RJ, RS, SP e PE",
                highlight: true
            }
        ],
        network: [
            {
                title: "Hospitais Destaque",
                icon: "hospital",
                items: [
                    { name: "Hospital Brasília (Lago Sul e Águas Claras)" },
                    { name: "Hospital Daher" },
                    { name: "Hospital Santa Lúcia" }
                ]
            },
            {
                title: "Laboratórios",
                icon: "lab",
                items: [
                    { name: "Laboratório Sabin" },
                    { name: "Laboratório Exame" },
                    { name: "Coleta Domiciliar MedSênior" }
                ]
            },
            {
                title: "Unidades Próprias",
                icon: "own",
                description: "Centros especializados exclusivos para beneficiários.",
                features: [
                    "PS 24h SIG e Taguatinga",
                    "Centro Oftalmológico (Asa Sul e Águas Claras)",
                    "Centro de Diagnóstico SIG"
                ]
            }
        ]
    },

    // VITÓRIA / ESPÍRITO SANTO (Grande Vitória)
    "Vitória": {
        name: "Vitória",
        slug: "vitoria",
        hero: {
            title: "MedSênior",
            subtitle: "44+",
            image: "/images/hero/vitoria_medsenior.webp",
            badge: "Sede MedSênior",
            differential: {
                title: "Diferencial ES",
                text: "Hospital Próprio MedSênior e Centros de Oncologia e Terapia da Dor."
            }
        },
        plans: [
            {
                id: 1,
                name: "ES3",
                badge: "Rede Ampla",
                priceDesc: "Enfermaria | ANS 492.180/22-1",
                description: "Enfermaria com rede credenciada maior na Grande Vitória. Ideal para quem quer mais opções de atendimento clínico, exames e internações.",
                area: "Cariacica (ES), Serra (ES), Vila Velha (ES) e Vitória (ES)",
                highlight: false
            },
            {
                id: 2,
                name: "ES4",
                badge: "Privacidade",
                priceDesc: "Apartamento | ANS 492.179/22-8",
                description: "Plano em apartamento que oferece quarto exclusivo durante internações, com ampla rede na região metropolitana e foco em conforto.",
                area: "Cariacica (ES), Serra (ES), Vila Velha (ES) e Vitória (ES)",
                highlight: false
            },
            {
                id: 3,
                name: "Black",
                badge: "Premium",
                priceDesc: "Apartamento | ANS 502.795/25-1",
                description: "Opção premium do Espírito Santo, com rede de hospitais e clínicas selecionadas e estrutura preparada para procedimentos de maior complexidade.",
                area: "DF, ES, MG, PR, RJ, RS, SP e PE",
                highlight: true
            }
        ],
        network: [
            {
                title: "Hospitais Destaque",
                icon: "hospital",
                items: [
                    { name: "Vitória Apart Hospital" },
                    { name: "Vila Velha Hospital" },
                    { name: "Hospital Santa Rita" },
                    { name: "Santa Casa de Misericórdia" }
                ]
            },
            {
                title: "Laboratórios",
                icon: "lab",
                items: [
                    { name: "Laboratório MedSênior (com coleta domiciliar)" },
                    { name: "Tommasi" },
                    { name: "Pretti" }
                ]
            },
            {
                title: "Estrutura Própria",
                icon: "own",
                description: "A mais completa rede própria da operadora.",
                features: [
                    "Hospital MedSênior",
                    "Centro de Terapia da Dor",
                    "Centro de Oncologia",
                    "Unidades de Pronto Atendimento"
                ]
            }
        ]
    },

    // RIO DE JANEIRO
    "Rio de Janeiro": {
        name: "Rio de Janeiro",
        slug: "rio-de-janeiro",
        hero: {
            title: "MedSênior",
            subtitle: "44+",
            image: "/images/hero/rio_de_janeiro_medsenior.webp",
            badge: "Expansão RJ",
            differential: {
                title: "Diferencial RJ",
                text: "Foco em desospitalização e ampla rede no Grande Rio e Niterói."
            }
        },
        plans: [
            {
                id: 1,
                name: "Essencial",
                badge: "Custo x Benefício",
                priceDesc: "Enfermaria | ANS 494.293/23-1",
                description: "Plano com foco em acessibilidade e qualidade, garantindo cobertura básica importante na rede credenciada do Rio.",
                area: "Rio de Janeiro (RJ)",
                highlight: false
            },
            {
                id: 2,
                name: "RJ1",
                badge: "Rede Ampla",
                priceDesc: "Enfermaria | ANS 489.488/21-0",
                description: "Enfermaria com rede ampliada no Rio de Janeiro, oferecendo mais alternativas de hospitais, clínicas e médicos parceiros.",
                area: "Rio de Janeiro (RJ)",
                highlight: false
            },
            {
                id: 3,
                name: "RJ2",
                badge: "Privacidade",
                priceDesc: "Apartamento | ANS 489.487/21-1",
                description: "Plano em apartamento para quem prefere acomodação exclusiva nas internações, mantendo rede estruturada e conforto no cuidado.",
                area: "Rio de Janeiro (RJ)",
                highlight: false
            },
            {
                id: 4,
                name: "Black",
                badge: "Premium",
                priceDesc: "Apartamento | ANS 502.795/25-1",
                description: "Linha Black com acesso a rede mais seletiva e suporte completo em procedimentos de maior complexidade na capital fluminense.",
                area: "DF, ES, MG, PR, RJ, RS, SP e PE",
                highlight: true
            }
        ],
        network: [
            {
                title: "Hospitais Destaque",
                icon: "hospital",
                items: [
                    { name: "Senior Botafogo" },
                    { name: "CHN Niterói" },
                    { name: "Hospital Icaraí" },
                    { name: "Casa de Saúde Santa Martha" },
                    { name: "Hospital Pan Americano" }
                ]
            },
            {
                title: "Laboratórios",
                icon: "lab",
                items: [
                    { name: "Bronstein" },
                    { name: "Sérgio Franco" },
                    { name: "Lâmina" }
                ]
            },
            {
                title: "Diferenciais",
                icon: "own",
                description: "Modelo assistencial focado na terceira idade.",
                features: [
                    "Programa de Saúde Preventiva",
                    "Monitoramento de Pacientes",
                    "Gestão de Cuidado com Enfermeiro"
                ]
            }
        ]
    },

    // PORTO ALEGRE / RIO GRANDE DO SUL
    "Porto Alegre": {
        name: "Porto Alegre",
        slug: "porto-alegre",
        hero: {
            title: "MedSênior",
            subtitle: "44+",
            image: "/images/hero/porto_alegre_medsenior.webp",
            badge: "Tradição e Inovação",
            differential: {
                title: "Diferencial RS",
                text: "Unidade MedSênior Floresta e expansão de rede no Vale dos Sinos."
            }
        },
        plans: [
            {
                id: 1,
                name: "Essencial",
                badge: "Custo x Benefício",
                priceDesc: "Enfermaria | ANS 495.664/23-8",
                description: "Plano de entrada em Porto Alegre, com bom custo-benefício e cobertura adequada na rede credenciada local.",
                area: "Porto Alegre (RS)",
                highlight: false
            },
            {
                id: 2,
                name: "ENF. POA",
                badge: "Rede Ampla",
                priceDesc: "Enfermaria | ANS 498.284/24-3",
                description: "Versão em enfermaria com rede ampliada na capital, ideal para quem quer mais alternativas de médicos e hospitais.",
                area: "Porto Alegre (RS)",
                highlight: false
            },
            {
                id: 3,
                name: "APAR. POA",
                badge: "Privacidade",
                priceDesc: "Apartamento | ANS 498.285/24-1",
                description: "Plano em apartamento com foco em privacidade e conforto durante internações, mantendo ampla rede credenciada em Porto Alegre.",
                area: "Porto Alegre (RS)",
                highlight: false
            },
            {
                id: 4,
                name: "Black",
                badge: "Premium",
                priceDesc: "Apartamento | ANS 502.795/25-1",
                description: "Produto premium com cobertura em diversos estados, indicado para quem busca estrutura de alto nível e atendimento diferenciado.",
                area: "DF, ES, MG, PR, RJ, RS, SP e PE",
                highlight: true
            }
        ],
        network: [
            {
                title: "Hospitais Destaque",
                icon: "hospital",
                items: [
                    { name: "Hospital Mãe de Deus" },
                    { name: "Blanc Hospital" },
                    { name: "Hospital de Clínicas de POA" },
                    { name: "Hospital Divina Providência" },
                    { name: "Hospital Ernesto Dornelles" }
                ]
            },
            {
                title: "Laboratórios",
                icon: "lab",
                items: [
                    { name: "Weinmann" },
                    { name: "Serdil" },
                    { name: "SIDI" }
                ]
            },
            {
                title: "Unidade Própria",
                icon: "own",
                description: "Atendimento local especializado.",
                features: [
                    "Unidade MedSênior Floresta (Ambulatório)",
                    "Oficinas de Saúde"
                ]
            }
        ]
    },

    // RECIFE
    Recife: {
        name: "Recife",
        slug: "recife",
        hero: {
            title: "MedSênior",
            subtitle: "44+",
            image: "/images/hero/recife_medsenior.webp",
            badge: "Inovação no Nordeste",
            differential: {
                title: "Diferencial PE",
                text: "Chegada do modelo 'Bem Envelhecer' com Telemedicina avançada."
            }
        },
        plans: [
            {
                id: 1,
                name: "REC 1",
                badge: "Rede Ampla",
                priceDesc: "Enfermaria | ANS 502.797/25-7",
                description: "Plano em enfermaria com boa rede credenciada em Recife, equilibrando acesso a serviços e mensalidade acessível.",
                area: "Recife (PE)",
                highlight: false
            },
            {
                id: 2,
                name: "REC 2",
                badge: "Privacidade",
                priceDesc: "Apartamento | ANS 502.796/25-9",
                description: "Apartamento com privacidade nas internações e ampla rede local, pensado para uma recuperação mais tranquila.",
                area: "Recife (PE)",
                highlight: false
            },
            {
                id: 3,
                name: "Black",
                badge: "Premium",
                priceDesc: "Apartamento | ANS 502.795/25-1",
                description: "Modalidade premium com rede de referência e maior abrangência nacional, mantendo foco em atendimento personalizado.",
                area: "DF, ES, MG, PR, RJ, RS, SP e PE",
                highlight: true
            }
        ],
        network: [
            {
                title: "Hospitais Destaque",
                icon: "hospital",
                items: [
                    { name: "Real Hospital Português" },
                    { name: "Hospital Santa Joana" },
                    { name: "Hospital Albert Sabin" },
                    { name: "Villa Ideale" }
                ]
            },
            {
                title: "Laboratórios",
                icon: "lab",
                items: [
                    { name: "Laboratório Marcelo Magalhães" },
                    { name: "Cerpe" },
                    { name: "Clínica Longevita" }
                ]
            },
            {
                title: "Diferenciais",
                icon: "own",
                description: "Tecnologia e cuidado preventivo.",
                features: [
                    "Monitoramento Remoto",
                    "Programa Bem Envelhecer",
                    "Telemedicina 24h"
                ]
            }
        ]
    },

    // CAMPINAS
    Campinas: {
        name: "Campinas",
        slug: "campinas",
        hero: {
            title: "MedSênior",
            subtitle: "44+",
            image: "/images/hero/campinas_medsenior.webp",
            badge: "Cuidado Integral",
            differential: {
                title: "Diferencial Campinas",
                text: "Unidade própria com ambulatório e gestão de cuidado preventiva."
            }
        },
        plans: [
            {
                id: 1,
                name: "Essencial",
                badge: "Custo x Benefício",
                priceDesc: "Enfermaria | ANS 499.101/24-0",
                description: "Essencial Enfermaria com perfil mais econômico, indicado para quem quer entrar na rede MedSênior em Campinas com boa relação custo x cobertura.",
                area: "Campinas (SP)",
                highlight: false
            },
            {
                id: 2,
                name: "CPS 1",
                badge: "Rede Ampla",
                priceDesc: "Enfermaria | ANS 499.104/24-4",
                description: "Plano em enfermaria com rede credenciada ampliada em Campinas, oferecendo mais opções de atendimento clínico e hospitalar.",
                area: "Campinas (SP)",
                highlight: false
            },
            {
                id: 3,
                name: "CPS 2",
                badge: "Privacidade",
                priceDesc: "Apartamento | ANS 499.103/24-6",
                description: "Versão em apartamento da linha Campinas, garantindo acomodação exclusiva nas internações e boa estrutura de rede.",
                area: "Campinas (SP)",
                highlight: false
            },
            {
                id: 4,
                name: "Black",
                badge: "Premium",
                priceDesc: "Apartamento | ANS 502.795/25-1",
                description: "Plano Black com foco em experiência premium, Rede MedSênior ampliada e suporte a procedimentos de maior complexidade.",
                area: "DF, ES, MG, PR, RJ, RS, SP e PE",
                highlight: true
            }
        ],
        network: [
            {
                title: "Hospitais Destaque",
                icon: "hospital",
                items: [
                    { name: "Hospital Vera Cruz" },
                    { name: "Hospital Madre Theodora" },
                    { name: "Hospital Centro Médico" },
                    { name: "Casa de Saúde de Campinas" }
                ]
            },
            {
                title: "Laboratórios",
                icon: "lab",
                items: [
                    { name: "Coleta Domiciliar MedSênior" },
                    { name: "Laboratórios Credenciados Locais" }
                ]
            },
            {
                title: "Unidade Própria",
                icon: "own",
                description: "Atendimento focado na prevenção.",
                features: [
                    "Unidade MedSênior Campinas",
                    "Núcleo de Medicina Preventiva"
                ]
            }
        ]
    }
};