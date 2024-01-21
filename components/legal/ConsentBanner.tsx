"use client"

import Script from "next/script"
import { useEffect } from "react"

export default function ConsentBanner() {


  useEffect(() => {

  })

  // https://github.com/brainsum/cookieconsent
  return <>
    <Script src="/assets/js/cookieconsent.js" onLoad={() => {
      //@ts-ignore
      window.CookieConsent!!.init({
        theme: {
          barColor: '#6440FB',
          barTextColor: '#fff',
          barMainButtonColor: '#fff',
          barMainButtonTextColor: '#6440FB',
          modalMainButtonColor: '#6440FB',
          modalMainButtonTextColor: '#fff',
          focusColor: 'rgb(40 168 52 / 75%)'
        },
        language: {
          current: 'en',
          locale: {
            en: {
              cookieBarLabel: 'Cookie consent',
              barMainText: 'This website uses cookies to ensure you get the best experience on our website.',
              closeAriaLabel: 'close',
              barLinkSetting: 'Cookie Settings',
              barBtnAcceptAll: 'Accept all cookies',
              barBtnRejectAll: 'Reject all cookies',
              modalMainTitle: 'Cookie settings',
              modalMainText: 'Cookies are small piece of data sent from a website and stored on the user\'s computer by the user\'s web browser while the user is browsing. Your browser stores each message in a small file, called cookie. When you request another page from the server, your browser sends the cookie back to the server. Cookies were designed to be a reliable mechanism for websites to remember information or to record the user\'s browsing activity.',
              modalBtnSave: 'Save current settings',
              modalBtnAcceptAll: 'Accept all cookies and close',
              modalBtnRejectAll: 'Reject all cookies and close',
              modalAffectedSolutions: 'Affected solutions:',
              learnMore: 'Learn More',
              on: 'On',
              off: 'Off',
              enabled: 'is enabled.',
              disabled: 'is disabled.',
              checked: 'checked',
              unchecked: 'unchecked'
            },
            de: {
              cookieBarLabel: 'Cookie Zustimmung',
              barMainText: 'Diese Webseite verwendet Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website machen.',
              closeAriaLabel: 'schließen',
              barLinkSetting: 'Cookie Einstellungen',
              barBtnAcceptAll: 'Alle Cookies akzeptieren',
              barBtnRejectAll: 'Alle Cookies ablehnen',
              modalMainTitle: 'Cookie Einstellungen',
              modalMainText: 'Cookies sind kleine Datenstücke, die von einer Webseite gesendet und auf dem Computer des Nutzers vom Webbrowser des Nutzers gespeichert werden, während der Nutzer surft. Ihr Browser speichert jede Nachricht in einer kleinen Datei, genannt Cookie. Wenn Sie eine andere Seite vom Server anfordern, sendet Ihr Browser das Cookie zurück an den Server. Cookies wurden als zuverlässiger Mechanismus entwickelt, damit Websites Informationen speichern oder die Surfaktivität des Nutzers aufzeichnen können.',
              modalBtnSave: 'Aktuelle Einstellungen speichern',
              modalBtnAcceptAll: 'Alle Cookies akzeptieren und schließen',
              modalBtnRejectAll: 'Alle Cookies ablehnen und schließen',
              modalAffectedSolutions: 'Betroffene Lösungen:',
              learnMore: 'Mehr erfahren',
              on: 'An',
              off: 'Aus',
              enabled: 'ist aktiviert.',
              disabled: 'ist deaktiviert.',
              checked: 'ausgewählt',
              unchecked: 'nicht ausgewählt'
            }
          }
        },
        categories: {
          necessary: {
            needed: true,
            wanted: true,
            checked: true,
            language: {
              locale: {
                en: {
                  name: 'Strictly Necessary Cookies',
                  description: 'Necessary cookies are essential for the basic function of our website. They enable basic functions such as page navigation and access to secure areas of the website. Without these cookies, the website cannot function properly. They do not store any personal information and are automatically placed on your device as soon as you visit our website. We use these cookies to provide you with an efficient and hassle-free experience on our website.',
                },
                de: {
                  name: 'Essenzielle Cookies',
                  description: 'Notwendige Cookies sind essenziell für die grundlegende Funktion unserer Website. Sie ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Webseite. Ohne diese Cookies kann die Webseite nicht richtig funktionieren. Sie speichern keine persönlichen Informationen und werden automatisch auf Ihrem Gerät platziert, sobald Sie unsere Website besuchen. Wir nutzen diese Cookies, um Ihnen ein effizientes und problemloses Erlebnis auf unserer Website zu ermöglichen.',
                }
              }
            }
          },
          various: {
            needed: false,
            wanted: false,
            checked: false,
            language: {
              locale: {
                en: {
                  name: 'Functionality and Performance Cookies',
                  description: 'Functionality and Performance Cookies: This type of cookie is used to enable additional functionalities on our website and help us analyze the use of our website in order to improve its performance. They collect information about how visitors use our website, which pages they visit, and whether errors occur. These cookies do not store any information that could directly identify you.',
                },
                de: {
                  name: 'Funktionalitäts- und Leistungs-Cookies',
                  description: 'Diese Art von Cookies wird genutzt, um zusätzliche Funktionen auf unserer Webseite zu ermöglichen und uns dabei zu helfen, die Nutzung unserer Webseite zu analysieren, um deren Leistung zu verbessern. Sie sammeln Informationen darüber, wie Besucher unsere Website nutzen, welche Seiten sie besuchen, und ob Fehler auftreten. Diese Cookies speichern keine Informationen, die Sie direkt identifizieren könnten.',
                }
              }
            }
          }
        },
        services: {
          consentStorage: {
            category: 'necessary',
            type: 'localcookie',
            search: 'cconsent',
            language: {
              locale: {
                en: {
                  name: 'Consent Cookies: This cookie stores your current privacy settings so that you do not have to set them again each time you visit our website. It ensures that your decisions regarding cookie consent are respected and followed. This cookie does not collect any personal data and is only used to store your settings.'
                },
                de: {
                  name: 'Einwilligungs-Cookies: Dieser Cookie speichert Ihre aktuellen Datenschutzeinstellungen, sodass Sie sie nicht jedes Mal erneut festlegen müssen, wenn Sie unsere Website besuchen. Er sorgt dafür, dass Ihre Entscheidungen hinsichtlich der Zustimmung zu Cookies respektiert und befolgt werden. Dieser Cookie sammelt keine persönlichen Daten und wird nur verwendet, um Ihre Einstellungen zu speichern.'
                }
              }
            }
          }

          /*
          facebook: {
              category: 'various',
              type: 'dynamic-script', // dynamic-script, script-tag, wrapped, localcookie
              search: 'facebook',
              language: {
                  locale: {
                      en: {
                          name: 'Facebook'
                      },
                      hu: {
                          name: 'Facebook'
                      }
                  }
              }
          },
          azalead: {
              category: 'various',
              type: 'script-tag',
              search: 'azalead',
              language: {
                  locale: {
                      en: {
                          name: 'Azalead'
                      },
                      hu: {
                          name: 'Azalead'
                      }
                  }
              }
          },
          wrapped: {
              category: 'various',
              type: 'wrapped',
              search: 'wrapped',
              language: {
                  locale: {
                      en: {
                          name: 'Wrapped'
                      },
                      hu: {
                          name: 'Csomagolt süti'
                      }
                  }
              }
          },
          localcookie: {
              category: 'various',
              type: 'localcookie',
              search: 'localcookie',
              language: {
                  locale: {
                      en: {
                          name: 'Local cookie'
                      },
                      hu: {
                          name: 'Helyi süti'
                      }
                  }
              }
          }*/
        }
      });
    }}></Script>
  </>

}
