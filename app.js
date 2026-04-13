const questions = [
    // Dimensão 1: Preparação e Governança
    {
        dimension: "Preparação e Governança",
        question: "Qual o grau de envolvimento da alta direção na adequação à LGPD?",
        options: [
            { text: "Nenhum. A LGPD ainda não foi pautada na empresa.", score: 0 },
            { text: "Existe conscientização superficial, mas sem patrocínio direto.", score: 3 },
            { text: "Temos um comitê e projeto de adequação em andamento.", score: 7 },
            { text: "Cultura consolidada. A alta direção patrocina e monitora indicadores trimestrais.", score: 10 }
        ]
    },
    {
        dimension: "Preparação e Governança",
        question: "A empresa possui um orçamento anual e responsáveis (interno/externo) pela privacidade?",
        options: [
            { text: "Não há orçamento nem responsáveis.", score: 0 },
            { text: "Responsabilidades informais (TI/Jurídico faz 'quando pode').", score: 3 },
            { text: "DPO ou Comitê nomeado, mas orçamento é aprovado sob demanda.", score: 7 },
            { text: "Orçamento predefinido e Encarregado com autonomia técnica garantida.", score: 10 }
        ]
    },
    {
        dimension: "Preparação e Governança",
        question: "Como novos produtos ou serviços são concebidos em relação à privacidade (Privacy by Design)?",
        options: [
            { text: "Não há análise de privacidade no desenvolvimento inicial.", score: 0 },
            { text: "Analisamos a privacidade apenas após o lançamento, se houver problemas.", score: 3 },
            { text: "Privacidade é um checklist final antes do lançamento.", score: 7 },
            { text: "Integralmente incorporada desde a ideação do projeto (Privacy by Design).", score: 10 }
        ]
    },
    
    // Dimensão 2: Mapeamento de Dados (Inventário)
    {
        dimension: "Mapeamento de Dados",
        question: "A empresa possui um Inventário de Dados Pessoais (RoPA) mapeado e atualizado?",
        options: [
            { text: "Não temos controle sobre quais dados são coletados.", score: 0 },
            { text: "Mapeamos os sistemas principais, mas processos manuais/planilhas estão fora.", score: 3 },
            { text: "Temos a maioria dos processos mapeados em planilhas.", score: 7 },
            { text: "Inventário completo e centralizado, cobrindo todo o ciclo de vida do dado.", score: 10 }
        ]
    },
    {
        dimension: "Mapeamento de Dados",
        question: "A empresa identifica e trata de forma diferenciada os Dados Pessoais Sensíveis (saúde, biometria, etc)?",
        options: [
            { text: "Não sabemos diferenciar dados comuns de sensíveis.", score: 0 },
            { text: "Sabemos o que são, mas o nível de proteção é o mesmo dos dados comuns.", score: 3 },
            { text: "A proteção é maior para dados sensíveis em sistemas de TI, mas não em RH/Físico.", score: 7 },
            { text: "Controles rigorosos e específicos para dados sensíveis em todas as áreas.", score: 10 }
        ]
    },
    {
        dimension: "Mapeamento de Dados",
        question: "Existe controle sobre o ciclo de vida e prazo de retenção/descarte dos dados?",
        options: [
            { text: "Guardamos tudo indefinidamente.", score: 0 },
            { text: "Excluímos apenas quando há solicitação ou perda de cliente.", score: 4 },
            { text: "Temos regras de temporalidade, mas a exclusão ainda é manual.", score: 7 },
            { text: "Política de retenção documentada e rotinas automatizadas de descarte seguro.", score: 10 }
        ]
    },
    
    // Dimensão 3: Bases Legais e Conformidade
    {
        dimension: "Bases Legais e Conformidade",
        question: "Para cada tratamento de dado, foi definida a Base Legal correta (Consentimento, Contrato, Legítimo Interesse)?",
        options: [
            { text: "Desconhecemos o conceito de Bases Legais.", score: 0 },
            { text: "Baseamos quase tudo em consentimento (mesmo quando não deveria).", score: 3 },
            { text: "Definimos bases legais para a maioria das operações corporativas.", score: 7 },
            { text: "100% dos tratamentos possuem base legal justificada e documentada.", score: 10 }
        ]
    },
    {
        dimension: "Bases Legais e Conformidade",
        question: "Como o Consentimento é gerenciado (livre, inequívoco, granular)?",
        options: [
            { text: "Coletamos sem clareza ou via 'caixas pré-marcadas'.", score: 0 },
            { text: "O consentimento é global, sem especificar finalidades diferentes.", score: 4 },
            { text: "O consentimento é específico, mas a revogação é um processo difícil.", score: 7 },
            { text: "Livre, granular e com painel de fácil revogação pelo titular.", score: 10 }
        ]
    },
    {
        dimension: "Bases Legais e Conformidade",
        question: "A empresa realiza o Relatório de Impacto (RIPD) antes de tratamentos de alto risco?",
        options: [
            { text: "Nunca ouvimos falar em Relatório de Impacto.", score: 0 },
            { text: "Realizamos apenas após ocorrer algum incidente.", score: 3 },
            { text: "Realizamos apenas quando solicitado por algum grande cliente.", score: 6 },
            { text: "RIPD é padrão para todo projeto que envolve risco ou larga escala.", score: 10 }
        ]
    },

    // Dimensão 4: Direitos dos Titulares
    {
        dimension: "Direitos dos Titulares",
        question: "Existe um canal específico e público para o titular exercer seus direitos?",
        options: [
            { text: "Não. O cliente precisa ligar no SAC geral.", score: 0 },
            { text: "Existe um e-mail genérico (contato@), mas sem prioridade de dados.", score: 3 },
            { text: "E-mail ou formulário dedicado com prazos controlados.", score: 7 },
            { text: "Portal de Privacidade automatizado com fluxo claro de atendimento.", score: 10 }
        ]
    },
    {
        dimension: "Direitos dos Titulares",
        question: "A empresa consegue atender requisições de portabilidade ou exclusão em até 15 dias?",
        options: [
            { text: "Impossível rastrear todos os dados de um indivíduo hoje.", score: 0 },
            { text: "Muito difícil, exige intervenção manual exaustiva do TI.", score: 3 },
            { text: "Conseguimos em muitos sistemas, mas o histórico é fragmentado.", score: 6 },
            { text: "Fluxo automatizado e centralizado para atendimento imediato.", score: 10 }
        ]
    },

    // Dimensão 5: Encarregado de Dados (DPO)
    {
        dimension: "Encarregado de Dados (DPO)",
        question: "A empresa nomeou formalmente o Encarregado ou DPO (As-a-Service)?",
        options: [
            { text: "Não possuímos e nem cogitamos nomear.", score: 0 },
            { text: "Alguém do TI ou Jurídico faz o papel informalmente.", score: 3 },
            { text: "DPO nomeado, mas com conflito de interesses (ex: Diretor de TI).", score: 6 },
            { text: "DPO formalizado (interno ou externo) com autonomia e recursos.", score: 10 }
        ]
    },
    {
        dimension: "Encarregado de Dados (DPO)",
        question: "O DPO atua proativamente na orientação dos funcionários e gestão de riscos?",
        options: [
            { text: "O DPO é apenas figurativo (nome no papel).", score: 0 },
            { text: "Atua apenas quando acontece algum problema grave.", score: 4 },
            { text: "Realiza auditorias anuais e responde as dúvidas pontuais.", score: 7 },
            { text: "Atuação consultiva diária, treinamentos e melhoria contínua.", score: 10 }
        ]
    },

    // Dimensão 6: Segurança da Informação
    {
        dimension: "Segurança da Informação",
        question: "Quais medidas de segurança técnica são adotadas (Criptografia, 2FA, Antivírus)?",
        options: [
            { text: "Apenas as proteções padrão de sistemas de mercado.", score: 0 },
            { text: "Antivírus comum e senhas simples sem política de troca.", score: 3 },
            { text: "Backups na nuvem, firewall e acessos individuais controlados.", score: 7 },
            { text: "Criptografia de ponta a ponta, 2FA (MFA) obrigatório e monitoramento de logs.", score: 10 }
        ]
    },
    {
        dimension: "Segurança da Informação",
        question: "Existe controle rígido de quem acessa o quê (Princípio do Menor Privilégio)?",
        options: [
            { text: "Todos acessam quase tudo no sistema.", score: 0 },
            { text: "Perfis genéricos de acesso (ex: 'Setor Comercial').", score: 4 },
            { text: "Acessos individuais por função, mas os gestores têm 'super-poderes'.", score: 7 },
            { text: "Acesso granular: cada funcionário vê apenas o estritamente necessário.", score: 10 }
        ]
    },
    {
        dimension: "Segurança da Informação",
        question: "A empresa realiza treinamentos periódicos de conscientização (Phishing, Senhas)?",
        options: [
            { text: "Nunca realizamos.", score: 0 },
            { text: "Damos apenas uma palestra por ano ou no onboarding.", score: 4 },
            { text: "Treinamentos semestrais e avisos mensais por e-mail.", score: 7 },
            { text: "Cultura de segurança viva: simulações de phishing e treinamentos constantes.", score: 10 }
        ]
    },

    // Dimensão 7: Gestão de Incidentes
    {
        dimension: "Gestão de Incidentes",
        question: "Existe um Plano de Resposta a Incidentes (Vazamentos/Invasões) documentado?",
        options: [
            { text: "Não temos plano. Resolveríamos no susto.", score: 0 },
            { text: "Temos um rascunho de como TI deveria agir, nada formal.", score: 3 },
            { text: "Plano documentado, mas nunca testado (sem simulados).", score: 7 },
            { text: "Plano completo, testado anualmente e com Comitê de Crise treinado.", score: 10 }
        ]
    },
    {
        dimension: "Gestão de Incidentes",
        question: "A empresa sabe o fluxo legal para notificar a ANPD em caso de vazamento grave?",
        options: [
            { text: "Não sabíamos que era obrigatório notificar.", score: 0 },
            { text: "Sabemos da lei, mas não temos o formulário ou contato da ANPD.", score: 4 },
            { text: "Conhecemos o rito e temos apoio jurídico para elaborar o aviso.", score: 7 },
            { text: "Fluxograma imediato: notificação em 48h conforme diretrizes ANPD.", score: 10 }
        ]
    },

    // Dimensões Adicionais Baseadas em Pesquisa (Audit / Contratos)
    {
        dimension: "Contratos e Terceiros",
        question: "Seus contratos com fornecedores (operadores) possuem cláusulas específicas de proteção de dados?",
        options: [
            { text: "Usamos os contratos padrão sem menção à LGPD.", score: 0 },
            { text: "Alguns contratos novos já possuem cláusulas, mas os antigos não.", score: 4 },
            { text: "Aditivamos a maioria dos contratos críticos com cláusulas LGPD.", score: 8 },
            { text: "Padrão rigoroso de conformidade exigido de todos os parceiros e fornecedores.", score: 10 }
        ]
    },
    {
        dimension: "Contratos e Terceiros",
        question: "A empresa realiza auditorias de segurança nos seus fornecedores de dados (ex: nuvem, agência de marketing)?",
        options: [
            { text: "Nunca auditamos nenhum fornecedor.", score: 0 },
            { text: "Confiamos na reputação comercial deles.", score: 3 },
            { text: "Apenas pedimos que eles assinem um termo de conformidade.", score: 6 },
            { text: "Avaliamos ativamente certificações (ISO 27001) ou termos de segurança específicos.", score: 10 }
        ]
    }
];

// Estado da aplicação
let currentStep = 0;
let answers = [];
let profilingData = { size: 'me_epp', sector: 'general' };
let radarChartInstance = null;

// Referências DOM
const screens = {
    welcome: document.getElementById('screen-welcome'),
    profile: document.getElementById('screen-profile'),
    quiz: document.getElementById('screen-quiz'),
    calculating: document.getElementById('screen-calculating'),
    results: document.getElementById('screen-results')
};

const ui = {
    btnStart: document.getElementById('btn-start'),
    btnProfileNext: document.getElementById('btn-profile-next'),
    btnPrev: document.getElementById('btn-prev'),
    progressContainer: document.getElementById('progress-container'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-percentage'),
    questionText: document.getElementById('question-text'),
    dimensionBadge: document.getElementById('dimension-badge'),
    questionCounter: document.getElementById('question-counter'),
    optionsContainer: document.getElementById('options-container'),
    
    // Resultados e Leads
    scoreCircle: document.getElementById('score-circle'),
    finalScore: document.getElementById('final-score'),
    maturityLevel: document.getElementById('maturity-level-text'),
    maturityDesc: document.getElementById('maturity-description'),
    radarCanvas: document.getElementById('radarChart'),
    
    // Forms
    formLead: document.getElementById('lead-form'),
    btnDirectWhatsapp: document.getElementById('btn-direct-whatsapp')
};

// Funções de Navegação de Telas
function showScreen(screenKey) {
    Object.values(screens).forEach(screen => {
        if (!screen) return;
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    
    screens[screenKey].classList.remove('hidden');
    screens[screenKey].classList.add('active');
    
    if (screenKey === 'quiz') {
        ui.progressContainer.classList.remove('hidden');
    } else {
        ui.progressContainer.classList.add('hidden');
    }
}

function updateProgress() {
    const percent = Math.round(((currentStep) / questions.length) * 100);
    ui.progressFill.style.width = `${percent}%`;
    ui.progressText.innerText = `${percent}%`;
    ui.questionCounter.innerText = `${currentStep + 1}/${questions.length}`;
}

// Event Listeners
ui.btnStart.addEventListener('click', () => {
    showScreen('profile');
});

ui.btnProfileNext.addEventListener('click', () => {
    profilingData.size = document.getElementById('profile-size').value;
    profilingData.sector = document.getElementById('profile-sector').value;
    
    currentStep = 0;
    answers = new Array(questions.length).fill(null);
    loadQuestion();
    showScreen('quiz');
});

ui.btnPrev.addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
        loadQuestion();
    }
});

// Carregar Pergunta
function loadQuestion() {
    const q = questions[currentStep];
    
    ui.dimensionBadge.innerText = q.dimension;
    ui.questionText.innerText = q.question;
    
    ui.optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (answers[currentStep] === index) {
            btn.classList.add('selected');
        }
        
        btn.innerHTML = `<span>${opt.text}</span>`;
        
        btn.addEventListener('click', () => {
            selectOption(index);
        });
        
        ui.optionsContainer.appendChild(btn);
    });
    
    ui.btnPrev.disabled = currentStep === 0;
    updateProgress();
}

function selectOption(index) {
    const btns = ui.optionsContainer.querySelectorAll('.option-btn');
    btns.forEach(b => b.classList.remove('selected'));
    btns[index].classList.add('selected');
    
    answers[currentStep] = index;
    
    setTimeout(() => {
        if (currentStep < questions.length - 1) {
            currentStep++;
            loadQuestion();
        } else {
            finishQuiz();
        }
    }, 400); 
}

function finishQuiz() {
    ui.progressFill.style.width = `100%`;
    ui.progressText.innerText = `100%`;
    showScreen('calculating');
    
    setTimeout(() => {
        calculateResults();
        showScreen('results');
    }, 2500); 
}

const dimensionKeys = [
    "Preparação e Governança",
    "Mapeamento de Dados",
    "Bases Legais e Conformidade",
    "Direitos dos Titulares",
    "Encarregado de Dados (DPO)",
    "Segurança da Informação",
    "Gestão de Incidentes",
    "Contratos e Terceiros"
];

let finalResults = {};
let totalPercentage = 0;

function calculateResults() {
    let dimensionScores = {};
    let dimensionCounts = {};
    
    dimensionKeys.forEach(k => {
        dimensionScores[k] = 0;
        dimensionCounts[k] = 0;
    });
    
    answers.forEach((ansIndex, qIndex) => {
        const q = questions[qIndex];
        let point = q.options[ansIndex].score;
        
        // Lógica de Flexibilização ANPD (Res. 02/2022)
        // Se for PME, a questão de DPO tem peso reduzido ou bonificação
        if (profilingData.size === 'me_epp') {
            if (q.dimension === "Encarregado de Dados (DPO)") {
                // Para PME, mesmo uma nota média já é considerada 'conforme' perante a lei simplificada
                point = Math.min(10, point * 1.5); 
            }
        }
        
        dimensionScores[q.dimension] += point;
        dimensionCounts[q.dimension] += 1;
    });
    
    let radarData = [];
    let sumTotal = 0;
    
    dimensionKeys.forEach(k => {
        const dScore = (dimensionScores[k] / dimensionCounts[k]) * 10; 
        finalResults[k] = Math.min(100, Math.round(dScore));
        radarData.push(finalResults[k]);
        sumTotal += finalResults[k];
    });
    
    totalPercentage = Math.round(sumTotal / dimensionKeys.length);
    renderResults(totalPercentage, radarData);
}

function renderResults(total, radarData) {
    ui.finalScore.innerText = `${total}%`;
    ui.scoreCircle.style.background = `conic-gradient(var(--accent) ${total}%, rgba(255,255,255,0.05) ${total}%)`;
    
    let level = "";
    let desc = "";
    let color = "";
    
    if (total <= 25) {
        level = "Nível Inexpressivo";
        desc = "CRÍTICO: A empresa opera em alto risco legal e reputacional. Há ausência de processos básicos, tornando a organização vulnerável a multas pesadas e processos judiciais.";
        color = "#ef4444";
    } else if (total <= 50) {
        level = "Nível Iniciando";
        desc = "ALERTA: Existem iniciativas isoladas de TI ou Jurídico, mas falta estrutura de governança. A conformidade é precária e depende de ações heróicas individuais.";
        color = "#f59e0b";
    } else if (total <= 75) {
        level = "Nível Intermediário";
        desc = "MODERADO: A empresa possui boas práticas e documentação básica. O desafio agora é a consistência operacional e o monitoramento contínuo para manter os processos vivos.";
        color = "var(--accent)";
    } else {
        level = "Nível Aprimorado";
        desc = "ESTRATÉGICO: Excelente maturidade. A privacidade é vista como diferencial competitivo. Foco deve ser em Privacy by Audit (manter o selo e cultura de excelência).";
        color = "#10b981";
    }
    
    // Adicionar Texto Estratégico do eBook
    desc += "\n\n**Oportunidade Comercial:** Investidores e grandes parceiros hoje exigem conformidade LGPD. Elevar seu nível para 'Intermediário' ou 'Aprimorado' é a chave para fechar contratos B2B de alto valor.";

    ui.maturityLevel.innerText = level;
    ui.maturityLevel.style.color = color;
    ui.maturityDesc.innerText = desc;
    
    drawRadar(radarData);
}

function drawRadar(dataValues) {
    if (radarChartInstance) radarChartInstance.destroy();
    
    const ctx = ui.radarCanvas.getContext('2d');
    
    Chart.defaults.color = 'rgba(255,255,255,0.6)';
    Chart.defaults.font.family = "'Inter', sans-serif";
    
    // Simplificar labels para o gráfico radar ficar limpo
    const labels = ["Governança", "Dados", "Conformidade", "Direitos", "DPO", "Segurança", "Incidentes", "Parceiros"];

    radarChartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Sua Maturidade',
                data: dataValues,
                backgroundColor: 'rgba(0, 130, 139, 0.2)',
                borderColor: '#00828b',
                pointBackgroundColor: '#0a0f1a',
                pointBorderColor: '#00828b',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#00828b',
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    pointLabels: {
                        font: { size: 10, weight: '600' }
                    },
                    ticks: {
                        display: false,
                        min: 0,
                        max: 100,
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}

// Integração WhatsApp 
const WHATSAPP_NUMBER = "5511999604342";

function formatWhatsAppMessage(leadData) {
    let msg = `Olá Thiago!\n\n`;
    const perfilStr = profilingData.size === 'me_epp' ? 'Micro/Pequena Empresa' : 'Média/Grande Empresa';
    
    if (leadData) {
        msg += `Gostaria de uma consultoria baseada na minha Análise de Maturidade LGPD.\n\n`;
        msg += `📋 *Perfil do Negócio:*\n`;
        msg += `🏭 Porte: ${perfilStr}\n`;
        msg += `📍 Setor: ${profilingData.sector}\n\n`;
        msg += `👤 *Dados para contato:*\n`;
        msg += `Nome: ${leadData.name}\n`;
        msg += `Empresa: ${leadData.company}\n`;
        msg += `Telefone: ${leadData.phone}\n\n`;
    } else {
        msg += `Fiz o Assessment de LGPD e meu nível deu *${ui.maturityLevel.innerText}*.\n\n`;
    }
    
    msg += `📊 *Resultado da Análise (${totalPercentage}%):*\n`;
    dimensionKeys.forEach(k => {
        msg += `• ${k}: ${finalResults[k]}%\n`;
    });
    
    if (leadData && leadData.message) {
        msg += `\n💬 *Dúvida específica:*\n${leadData.message}\n`;
    }
    
    msg += `\nAguardo seu retorno para ajustarmos os pontos críticos!`;
    
    return encodeURIComponent(msg);
}

// Botões Envio
ui.formLead.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const leadData = {
        name: document.getElementById('lead-name').value,
        email: document.getElementById('lead-email').value,
        company: document.getElementById('lead-company').value,
        phone: document.getElementById('lead-phone').value,
        message: document.getElementById('lead-message').value
    };
    
    const rawMsg = formatWhatsAppMessage(leadData);
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${rawMsg}`;
    window.open(url, '_blank');
});

ui.btnDirectWhatsapp.addEventListener('click', () => {
    const rawMsg = formatWhatsAppMessage(null);
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${rawMsg}`;
    window.open(url, '_blank');
});
