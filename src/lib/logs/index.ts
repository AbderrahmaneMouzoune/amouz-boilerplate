import { env } from '@/env.mjs'

export async function sendLogs(error: Error) {
  if (env.LOG_WEBHOOK_DISCORD === undefined) {
    return
  }

  const embed = {
    title: 'Erreur détectée',
    description: error.message, // message d'erreur
    color: 15158332, // Couleur rouge pour indiquer une erreur
    fields: [
      {
        name: "Nom de l'erreur",
        value: error.name || 'Erreur inconnue',
        inline: true,
      },
      {
        name: "Message d'erreur",
        value: error.message || "Aucun message d'erreur",
        inline: true,
      },
      {
        name: 'Stack Trace',
        value: `\`\`\`${error.stack || 'Non disponible'}\`\`\``, // Le stack trace
      },
    ],
    timestamp: new Date().toISOString(),
  }

  try {
    await fetch(env.LOG_WEBHOOK_DISCORD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    })
  } catch (err) {
    console.error("Erreur lors de l'envoi des logs :", err)
  }
}
