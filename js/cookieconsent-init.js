// obtain plugin
var cc = initCookieConsent();
var reConsent = document.getElementById('cc-reconsent');

// run plugin with your configuration
cc.run({
    current_lang: 'th',
    theme_css: 'https://cdn.724.co.th/pdpa/assets/style/cookietheme.css',
    autoclear_cookies: true,                   // default: false
    page_scripts: true,                        // default: false
    cookie_name: 'centry_cookie',              // default: 'cc_cookie'
    delay: 2000,                               // default: 0
    cookie_domain: '.724.co.th',               // default: current domain
    cookie_path: '/',                          // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    // force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // use_rfc_cookie: false,                  // default: false
    // revision: 0,                            // default: 0

    gui_options: {
        consent_modal: {
            layout: 'cloud',                    // box,cloud,bar
            position: 'bottom center',          // bottom,middle,top + left,right,center
            transition: 'slide'                 // zoom,slide
        },
        settings_modal: {
            layout: 'box',                      // box,bar
            position: 'left',                   // right,left (available only if bar layout selected)
            transition: 'slide'                 // zoom,slide
        }
    },

    // onFirstAction: function(user_preferences, cookie){
    //     // callback triggered only once on the first accept/reject action
    // },

    onAccept: function (cookie) {
        // callback triggered on the first accept/reject action, and after each page load
        if (cc.validCookie('centry_cookie')) {
            reConsent.classList.add('is-active')
        } else {
            reConsent.classList.remove('is-active')
        }
    },

    // onChange: function (cookie, changed_preferences) {
    //     // callback triggered when user changes preferences after consent has already been given
    // },

    languages: {
        'th': {
            consent_modal: {
                title: 'เว็บไซต์นี้ใช้คุกกี้',
                description: 'เราใช้คุกกี้เพื่อพัฒนาประสิทธิภาพ และมอบประสบการณ์ที่ดีในการใช้งานเว็บไซต์ของคุณ รวมถึงเสนอสิทธิประโยชน์ที่ตรงตามความสนใจของคุณให้มากที่สุด ทั้งนี้คุณสามารถจัดการคุกกี้ของคุณได้เอง โดยคลิกที่ <button type="button" data-cc="c-settings" class="cc-link">ตั้งค่าคุกกี้</button>',
                primary_btn: {
                    text: 'ยอมรับทั้งหมด',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'ยอมรับเท่าที่จำเป็น',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: '<div class="s-ttl">การตั้งค่าคุกกี้</div><div class="cc-powerby" aria-hidden="true">โดย <a tabindex="-1" aria-hidden="true" href="http://centry.in.th/" title="CENTRY" target="_blank">CENTRY</a></div>',
                save_settings_btn: 'ยืนยันการยอมรับ',
                accept_all_btn: 'ยอมรับทั้งหมด',
                reject_all_btn: 'ยอมรับเท่าที่จำเป็น',
                close_btn_label: 'ปิด',
                blocks: [
                    {
                        title: 'คุกกี้ที่ใช้ในเว็บไซต์',
                        description: 'เมื่อคุณเข้ามาที่หน้าเว็บไซต์ จะมีการใช้คุกกี้เพื่อการปรับปรุงพัฒนาประสิทธิภาพ และมอบประสบการณ์ที่ดีในการใช้งานเว็บไซต์ของคุณ คุณสามารถเลือกการตั้งค่าคุกกี้โดย เปิด/ปิด คุกกี้ในแต่ละประเภทได้ตามความต้องการ ยกเว้น คุกกี้พื้นฐานที่จำเป็น คุณสามารถอ่านรายละเอียดเพิ่มเติมเกี่ยวกับคุกกี้ได้ที่ <a class="cc-link" href="https://724.co.th/cookies-policy" title="นโยบายการใช้คุกกี้" target="_blank">นโยบายการใช้คุกกี้</a>'
                    }, 
                    {
                        title: 'คุกกี้พื้นฐานที่จำเป็น',
                        description: 'คุกกี้เหล่านี้มีความสำคัญต่อการให้บริการบนเว็บไซต์แก่คุณ และเพื่อให้คุณสามารถใช้คุณลักษณะบางอย่างได้ คุกกี้เหล่านี้ช่วยในการยืนยันตัวบุคคลของผู้ใช้งานและช่วยป้องกันการปลอมแปลงบัญชีผู้ใช้งาน หากไม่มีคุกกี้เหล่านี้เราอาจไม่สามารถให้บริการแก่คุณได้ เราใช้คุกกี้ดังกล่าวนี้เพื่อให้บริการแก่คุณ',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true
                        }
                    }, 
                    /*
                    {
                        title: 'คุกกี้เพื่อการทำงานของเว็บไซต์',
                        description: 'คุกกี้เหล่านี้ช่วยให้เราจดจำสิ่งที่คุณเลือกเมื่อคุณใช้งานเว็บไซต์ เช่น การจดจำรายละเอียดการเข้าสู่ระบบหรือการตั้งค่าของคุณ วัตถุประสงค์ของคุกกี้เหล่านี้มีเพื่อให้คุณได้รับประสบการณ์ที่เป็นส่วนตัวมากขึ้น และเพื่อหลีกเลี่ยงไม่ให้คุณต้องใส่ข้อมูลของคุณใหม่ทุกครั้งเมื่อคุณใช้งานเว็บไซต์ คุกกี้ดังกล่าวนี้เป็นคุกกี้แบบถาวร เนื่องจากยังคงอยู่ในอุปกรณ์ของคุณเพื่อให้เราใช้ในการเยี่ยมชมเว็บไซต์ครั้งต่อไปของคุณ คุณสามารถลบคุกกี้เหล่านี้ผ่านเบราว์เซอร์ของคุณได้',
                        toggle: {
                            value: 'functional',
                            enabled: false,
                            readonly: false
                        }
                    }, 
                    */
                    {
                        title: 'คุกกี้เพื่อการวิเคราะห์/เพื่อประสิทธิภาพ',
                        description: 'คุกกี้เหล่านี้ช่วยให้เราจดจำและนับจำนวนผู้ใช้งานบนเว็บไซต์ของเรา รวมถึงทำให้เราเข้าใจถึงวิธีการที่ผู้ใช้งานใช้งานบนเว็บไซต์ สิ่งเหล่านี้จะช่วยปรับปรุงวิธีการทำงานของเว็บไซต์เรา เช่น เพื่อให้มั่นใจว่าผู้ใช้งานสามารถค้นหาสิ่งที่ต้องการได้ง่ายขึ้น',
                        toggle: {
                            value: 'analytical',
                            enabled: false,
                            readonly: false
                        }
                    }, 
                    {
                        title: 'คุกกี้เพื่อการตลาดและโฆษณา',
                        description: 'คุกกี้เหล่านี้ใช้เพื่อแสดงโฆษณาที่เกี่ยวข้องกับคุณ คุกกี้เหล่านี้จะจำกัดจำนวนครั้งที่คุณเห็นโฆษณาและช่วยให้เราประเมินประสิทธิภาพด้านการตลาด นอกจากนี้เราอาจใช้ข้อมูลที่ได้รับจากคุกกี้เหล่านี้เพื่อเสนอโฆษณาที่คุณอาจสนใจ โดยขึ้นอยู่กับพฤติกรรมการใช้งานออนไลน์ของคุณที่ผ่านมา คุกกี้ดังกล่าวนี้เป็นคุกกี้แบบถาวรเราอาจแบ่งปันข้อมูลนี้กับบุคคลที่สามรวมถึงพันธมิตรทางธุรกิจของเรา',
                        toggle: {
                            value: 'marketing',
                            enabled: false,
                            readonly: false
                        }
                    }, 
                    {
                        title: 'รายละเอียดเพิ่มเติม',
                        description: 'หากคุณมีข้อสงสัยใด ๆ เกี่ยวกับนโยบายการใช้คุกกี้ของเรา และตัวเลือกของคุณ กรุณา <a class="cc-link" href="https://724.co.th/contact-form" title="ติดต่อเรา" target="_blank">ติดต่อเรา</a>'
                    }
                ]
            }
        }
    }
});