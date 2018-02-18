﻿// PS3 Default Messages [Arabic]
// PS3Xploit Team 2018 / ps3xploit.com

// Translation Credits: @Azooz_yos


// After complete translate the language file update it to latest revision (same as en_us)
var current_minimum_lang_revision="0000";
var gui_incomplete_lang="Current translation is incomplete, consider updating or just skip it";

var msg_select_vsh_type="Use CEX?\n\nSelecting NO will use DEX offsets";

var msg_detected_fw_1=": الملفات التي تم العثور عليها ";
var msg_detected_fw_2=" ";
//var msg_detected_fw_3=" / MinVer: ";
var msg_detected_fw_4=" | تم دعم جميع انواع الأجهزة اصدارات";

var compat_msg_wrong_fw1="جهازك ليس على اصدار مدعوم اصدارك الحالي هو ";
var compat_msg_wrong_fw2=", الذي لا يدعم الثغرة تم ايقاف جميع الخصائص";
var compat_msg_success1="مبروك! يبدو ان جهازك يعمل على اصدار ";
var compat_msg_success2=", الذي يتوافق مع الثغرة استمتع !";

var msg_option_not_available="هذا الخيار غير متوفر الآن";

// Settings
var msg_settings_load="This is experimental and loads settings from a cookie!";
var msg_settings_save="This is experimental and saves settings to a cookie!";

// MinVer/CFW Compatibility
var msg_minver_loaded_into_mem="MinVer Return Value Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_minver_start="ادنى اصدار يمكن الرجوع عليه في جهازك هو ";
var msg_minver_mid=" وهو ";
var msg_minver_end=" متوافق مع التهكير في الوقت الحالي";
var msg_minver_compat_not="NOT";

// CELL/RSX Temperatures
var msg_temps_loaded_into_mem="CELL/RSX Temp Return Values Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_temps_cell=":درجة حرارة المعالج ";
var msg_temps_rsx="\:درجة حرارة RSX ";
var msg_temps_celcius=" Celcius";

// MemDump
var msg_memdump_warning="Warning!\n\nThis test will freeze if an unallocated memory area is hit during dumping process!\n\nYou will still get a valid dump, up until the crash!";
var msg_memdump_idps_vsh="Only 4.66/4.81/4.82 Currently Supported For Dumping IDPS Direct From VSH Memory!\n\nFlash Extract IDPS Based Chain Is Different.\n\nAll other FW versions will probably just dump all 0s.";
var msg_memdump_size="Raw VSH MemDump Values\n\nSize: 0x";
var msg_memdump_start_addr="\nStart Address: 0x";
var msg_memdump_end_addr="\nEnd Address: 0x";

// Warnings
var msg_fd_close_warning="File Descriptors Are Currently Not Closed Automatically!";
var msg_remove_dir_warning="WARNING!\n\nBe carefule while using this syscall.\n\nYou can remove a needed directory and have to reinstall firmware!";
var msg_warning_write_protection="Write Protection Disabled!\n\nProceed With CAUTION!!!";

var msg_cobra_only="تحذير الخيار لايعمل الا مع الاصدارات التي تدعم كوبرا";

var msg_mount_test="** IN TESTING PHASE **!\n\nThis will mount /dev_hdd1/\n\nOnce mounted, you can restart browser and use R/W File chain to dump from /dev_hdd1/ partition to a destination!";

// File Operations
var msg_default_size="استخدام الحجم الإفتراضي ";
var msg_default_size="استخدام الحجم الإفتراضي ";
var msg_new_size="New FileSize: ";
var msg_destination_path_set_new="New Path Set To:\n\n";
var msg_destination_path_incorrect="Destination Path Is Incorrect!\n\nIt Must Be Set Before Changing Title ID.";

// Trigger Messages
var trigger_msg="Triggering exploit...";
var trigger_msg2="Trigger: 0x";

// Search Strings
var msg_search_offsets="<h3><b>Searching For Offsets In Memory! Please Wait.... <br>If You Are Impatient, Close The Browser and Try Again In About 60-90 Seconds If Not Found!</b></h3>";
var msg_verify_offsets="<h3><b>Verifying Offsets In Memory! Please Wait.... <br>DO NOT Close The Browser Yet!</b></h3>";

// Fail Search Messages
var msg_string_search_fail="<h3><b><font color='#7700DA'>Did Not Find All Offsets!</font><font color='#7700DA'> If Search Fails Again, Adjust Search Settings or RESTART browser!</font></b></h3>";
var msg_string_search_fail_max="<h3><b><font color='#7700DA'>Did Not Find All Offsets!</font><font color='#7700DA'> Max Retries Attempted! Please RESTART browser!</font></b></h3>";

// Verify Strings Fail
var msg_string_verify_fail="<h3><b><font color='#7700DA'>Did Not Verify All Offsets!</font><font color='#7700DA'> If Verify Fails Again, RESTART browser!</font></b></h3>";
var msg_string_verify_fail_max="<h3><b><font color='#7700DA'>Did Not Verify All Offsets!</font><font color='#7700DA'> Max Retries Attempted! Please RESTART browser!</font></b></h3>";

// Init Success
var msg_success_init="<h3><b><font color='#386E38'>SUCCESS!</font><br><font color='#7700DA'>You Can Now Execute Your Chain!</font></b></h3>";

// Exec Success
var success_chain_exec="<h3><b><font color='#386E38'>Chain Executed Successfully!</font></b></h3>";
var success_chain_exec_press_again="<h3><b><font color='#386E38'>Press The Execute Button Once More!</font></b></h3>";
var success_chain_exec_psid="<h3><b><font color='#386E38'>PSID Dumped Successfully!</font></b></h3>";
var success_chain_exec_idps="<h3><b><font color='#386E38'>IDPS Dumped Successfully!</font></b></h3>";
var success_chain_exec_memdump="<h3><b><font color='#386E38'>Memory Dumped Successfully!</font></b></h3>";
var success_chain_exec_read_write_file="<h3><b><font color='#386E38'>Successfully Transferred Source To Destination!</font></b></h3>";
var success_mount_device="<h3><b><font color='#386E38'>Successfully Mounted /dev_hdd1/! Restart Browser and Run R/W File Chain To Dump.</font></b></h3>";

// Compatibility/Offset Messages
var ua_msg="<hr><h3>PS3 System Browser Info: "+navigator.userAgent+ "</h3>";
var compat_msg_nops3="You are not on a PlayStation System! All features have been disabled";
var compat_msg_devs="This Is For Developers Only!\n\nCEX offsets will need to be added manually to /js/chains/offsets.js file, based on your DEX offsets in use for each chain.";
var experimental="Set Your Home Page To This Page!\n\nUSE AT YOUR OWN RISK!\nThere could be bugs and some things may not work!\n\nAll Models On 4.xx CEX and 4.81 DEX Are Supported";

// Other Messages
var msg_prerelease="THIS IS AN EARLY PREVIEW RELEASE!\n\nOLDER FIRMWARE SUPPORT HAS ONLY BEEN PARTIALLY IMPLEMENTED!\n\n4.81/4.82 ONLY UNTIL NEXT RELEASE!";
var msg_anti_piracy="DISCLAIMER\n\nWe DO NOT condone or endorse PIRACY of any kind!\n\nBy using this tutorial, and clicking YES, you agree to use it for educational purposes ONLY!";
var msg_anti_piracy_edat="ANTI-PIRACY DISCLAIMER!\n\nThis option is intended for testing and development purposes only, and should not be abused!\n\nBy clicking YES you agree to ONLY use this for titles that have been purchased!";

var msg_thread_name="Hello_From_PS3Xploit";

// Devices
var msg_device_loaded_into_mem="Device Return Value Loaded Into Memory!\n\nPress Execute Button Again To Read and Display!";
var msg_get_device_info1="Returned Device: ";
var msg_get_device_info2="\n\nUse This For sys_storage_report_devices Chain";

// Debugging
var msg_debug_placeholder="Lazy XP +1";

var msg_stackframe_check="This will check the default stackframe for problems.\n\nIf it crashes or does not display a success message, then there is an issue!";

// String Matching
var verify_fail="<font color='#7700DA'>FAIL: Strings Do Not Match In Memory!</font>";
var verify_success="<font color='#2a1003'>SUCCESS: Strings Match In Memory!</font>";
var verify_skip="<font color='#2a1003'>SUCCESS: Not Verifying Strings In Memory!</font>";

var msg_search_flash_type_start="Search Params Set For ";
var msg_search_flash_type_end=" Flash Type!";

var msg_check_memory="checkMemory: ";
var msg_chk_mem_arg_error="checkMemory function arguments error! size=0x";
var msg_malformed_html="Malformed HTML!";
var msg_string_located=" Found at offset: 0x";
var msg_string_not_located="could not be located in range";

// Found Offsets
var msg_found_offsets="Found Offsets: ";
var msg_verified_offsets="Verified Offsets: ";
var offset_find_success="success";
var offset_find_base_fp="base_fp";
var offset_find_stack_frame="stack_frame";
var offset_find_jump2="jump2";
var offset_find_jump1="jump1";

var msg_page_args_not_set="Page Arguments Not Set!\n\nClick The Set Arguments Button and Retry!";
var msg_no_chain_selected="No ROP Chain Hex Selected\n\nUse The Drop-Down Box To Select One";
var msg_media_not_supported="This Media Choice Is Not Implemented Yet!";
var msg_cannot_continue="Cannot Continue....Returning!";

var msg_invalid_title_id="ALERT!\n\nThe Title ID Entered Has An Invalid Size!\n\nUsing Default ID.";

// index GUI text
var gui_title="PS3 Exploitation Tutorial Template ";
var gui_team="by PS3Xploit Team: <b><font color='#7700DA'>W</font><font color='#FFF'> | </font><font color='#7700DA'>esc0rtd3w</font><font color='#FFF'> | </font><font color='#7700DA'>habib</font><font color='#FFF'> | </font><font color='#7700DA'>bguerville</font></b>";
var gui_credits="Many thanks to xerpi for the userland memory leak exploit ps3 port, zecoxao & Joonie for their early & continued support, mysis for documenting vsh exports & plugins, the psdevwiki contributors of course, STLcardsWS for his long standing contribution & all ps3 community hackers/devs past & present, you know who you are. Thanks to littlebalup as well for providing the idea & the related js implementation we used to make the HDD edition of the Dumpers and Flasher. Also thanks to B7U3 C50SS, Endless, and 0x1991337 for tutorial syscall testing and other help! <font color='yellow'>More details & news on <a href='http://www.psx-place.com'>http://www.psx-place.com</a>. Official website at <a href='http://ps3xploit.com'>http://ps3xploit.com</a></font>";

// Checkboxes First Section
var gui_chk_default_settings=": الاعدادات الافتراضية";
var gui_chk_disable_trigger="ايقاف المحفز:";
var gui_chk_write_protect=": كتابة الأمان";
var gui_chk_flash_type_nand="NAND:";
var gui_chk_flash_type_nor=" NOR:";
var gui_chk_flash_type_emmc=" eMMC:";

// Reboot Mode
var gui_chk_reboot_mode=": وضع إعادة التشغيل";
var gui_chk_reboot_mode_select="* اختر وضع *";
var gui_chk_reboot_mode_soft="اعادة تشغيل بسيطة";
var gui_chk_reboot_mode_hard="إعادة تشغيل كاملة";
var gui_chk_reboot_mode_off="وضع ايقاف التشغيل";

// ROP Chain Text

// Preset Chains
var gui_txt_preset_chains=" سلاسل مسبقة الضبط: ";
var gui_txt_preset_chains_default=" افتراضي او اختبار:";
var gui_txt_option_stackframe_test="اختبار الإيطار";
var gui_txt_option_beep_test="اختبار الصوت";
var gui_txt_option_power_test="اختبار التشغيل";
var gui_txt_option_minver_check="اختبار أقل اصدار يحمله الجهاز";
var gui_txt_option_sys_game_get_temperature="إظهار درجة حرارة المعالج";
var gui_txt_option_game_debug_pafjob_test="تطوير وتصحيح خيارات اللعبة";
var gui_txt_option_console_write_test="اختبار كتابة الكونسول";
var gui_txt_option_sys_tty_read="TTY Read Test";
var gui_txt_option_sys_tty_write="TTY Write Test";

// Dumping
var gui_txt_preset_chains_dumping="تفريغ او استخراج السلاسل";
var gui_txt_option_system_info_multi_dump="استخراج معلومات النظام المتعدد";
var gui_txt_option_dump_lv2_syscall_table="Dump LV2 Syscall Tاستخراج";
var gui_txt_option_mem_dump_test="Dump Raw VSH Meاستخراج";
var gui_txt_option_get_open_psid="استخراج PSID";
var gui_txt_option_dump_idps_from_mem="استخراج IDPS من VSH";
var gui_txt_option_sys_net_dump="SysNet Dump";
var gui_txt_option_dump_idps_from_flash="استخراج IDPS من سعه التخزين خارجية";

// File System
var gui_txt_preset_chains_file_system="ملف النظام";
var gui_txt_option_db_rebuild="اعادة بناء قاعدة البيانات";
var gui_txt_option_file_read_write_test="اختبار قراءة وكتابة ملف";
var gui_txt_option_dir_read_write_test="اختبار قراءة وكتابة الفهرس";

// Fun
var gui_txt_preset_chains_fun="للمرح فقط";
var gui_txt_option_fun_test="اختبار الصوت";

// Other Syscall Chains

// Memory/Syatem
var gui_txt_syscall_group_mem_sys="الذاكرة / النظام: ";
var gui_txt_syscall_chains_mem_sys="الذاكرة";
var gui_txt_option_sys_rsx_memory_free="sys_rsx_memory_free";

// Storage
var gui_txt_syscall_chains_storage="مساحة التخزين";
var gui_txt_option_sys_storage_report_devices="sys_storage_report_devices";
var gui_txt_option_sys_storage_open="sys_storage_open";
var gui_txt_option_sys_storage_read="sys_storage_read";
var gui_txt_option_sys_fs_chmod="sys_fs_chmod";
var gui_txt_option_sys_fs_chown="sys_fs_chown";
var gui_txt_option_sys_fs_get_fs_info="sys_fs_get_fs_info";
var gui_txt_option_sys_fs_get_mount_info="sys_fs_get_mount_info";
var gui_txt_option_sys_fs_link="sys_fs_link";
var gui_txt_option_sys_fs_mapped_allocate="sys_fs_mapped_allocate";
var gui_txt_option_sys_fs_mapped_free="sys_fs_mapped_free";
var gui_txt_option_sys_fs_mkdir="sys_fs_mkdir";
var gui_txt_option_sys_fs_mount="sys_fs_mount";
var gui_txt_option_sys_fs_rename="sys_fs_rename";
var gui_txt_option_sys_fs_rmdir="sys_fs_rmdir";
var gui_txt_option_sys_fs_stat="sys_fs_stat";
var gui_txt_option_sys_fs_symbolic_link="sys_fs_symbolic_link";
var gui_txt_option_sys_fs_unlink="sys_fs_unlink";
var gui_txt_option_sys_fs_unmount="sys_fs_unmount";

// System
var gui_txt_syscall_chains_system="النظام";
var gui_txt_option_sys_ss_utoken_if="sys_ss_utoken_if";

// Process/Thread

// Process
var gui_txt_syscall_group_proc_thread="العملية / التشعب Thread: ";
var gui_txt_syscall_chains_proc_thread="العمليات";
var gui_txt_option_sys_process_exit="sys_process_exit";
var gui_txt_option_sys_process_kill="sys_process_kill";

var gui_txt_syscall_chains_process="Proc ID";

// Threads
var gui_txt_syscall_chains_threads="التشعبات";
var gui_txt_option_ppu_thread_get_priority="thread_get_priority";
var gui_txt_option_ppu_thread_get_stack_info="thread_get_stack_info";
var gui_txt_option_sys_ppu_thread_create="sys_ppu_thread_create";
var gui_txt_option_sys_ppu_thread_exit="sys_ppu_thread_exit";
var gui_txt_option_sys_ppu_thread_restart="sys_ppu_thread_restart";
var gui_txt_option_sys_ppu_thread_start="sys_ppu_thread_start";
var gui_txt_option_sys_ppu_thread_stop="sys_ppu_thread_stop";

// Thread ID
var gui_txt_syscall_chains_thread_id="Thread ID";

// Network
var gui_txt_syscall_group_network="الشبكة: ";
var gui_txt_syscall_chains_sys_net="sys_net";
var gui_txt_option_sys_net_open_dump="sys_net_open_dump";
var gui_txt_option_sys_net_read_dump="sys_net_read_dump";
var gui_txt_option_sys_net_write_dump="sys_net_write_dump";
var gui_txt_option_sys_net_close_dump="sys_net_close_dump";

var gui_txt_option_url="URL: ";

// Debugging
var gui_txt_syscall_group_debugging="التصحيح بمعنى ديبوق: ";
var gui_txt_syscall_chains_debug_sc="نظام المكالمات";
var gui_txt_option_debug_placeholder="اختبار_الصافرة";

// LED Control
var gui_txt_syscall_group_led="التحكم بالأضواء LED:";
var gui_txt_syscall_chains_led="* اختر سلسلة *";
var gui_txt_option_sys_sm_request_led="sys_sm_request_led";
var gui_txt_option_sys_sm_control_led="sys_sm_control_led";

var gui_txt_syscall_chains_led_color="تغيير اللون";
var gui_txt_option_led_color_green="أخضر";
var gui_txt_option_led_color_yellow_red="أصفر/أحمر";
var gui_txt_option_led_color_off="ايقاف";

var gui_txt_syscall_chains_led_action="تغيير الحركة";
var gui_txt_option_led_action_on="تشغيل";
var gui_txt_option_led_action_off="ايقاف";
var gui_txt_option_led_action_blink_fast=",وميض سريع";
var gui_txt_option_led_action_blink_slow="وميض بطيء";

// Beep Parameters
var gui_txt_syscall_group_beep_params=": معاملات الصافرة ";
var gui_txt_syscall_chains_beeps="# من الصافرات";
var gui_txt_option_beep_off="ايقاف";
var gui_txt_option_beep_3="ثلاثة تصفيرات";
var gui_txt_option_beep_2="تصفيرتان";
var gui_txt_option_beep_2f="تصفيرتان سريعتان";
var gui_txt_option_beep_1="تصفيرة واحدة";
var gui_txt_option_beep_1f="تصفيرة واحدة سريعة";
var gui_txt_option_beep_flatline="خط مسطح";

// Memory Dump
var gui_txt_syscall_group_memdump="النهاية";
var gui_txt_memdump_addresses="معلومات ملف الذاكرة المستخرج";
var gui_txt_memdump_size="حجم ملف الذاكرة المستخرج";
var gui_txt_memdump_range_presets="مسبقة الضبط:";
var gui_txt_option_memdump_presets_default="* لم يتم اختيار إعدادات مسبقة *";

var gui_txt_memdump_address_start="البداية";
var gui_txt_memdump_address_end="استخراج او تفريغ الذاكرة:";
var gui_txt_btn_memdump_set_values="وضع قيم جديدة";

var gui_txt_group_user_id="ID المستخدم";
var gui_txt_option_user_id_default="* إفتراضي *";
var gui_txt_user_id_new="تعيين ID المستخدم الى: ";
var gui_txt_home_path_new="\n\nNew Home Path Is: \n\n";

var gui_txt_group_permissions="الإذن:";
var gui_txt_option_chmod="chmod";
var gui_txt_option_chown="chown";

var gui_txt_group_filesize="حجم الملف:";
var gui_txt_group_titleid="عنوان ال ID";

var gui_txt_btn_set_filesize="تعيين";
var gui_txt_set_titleid="PS3XPLOIT";
var gui_txt_btn_set_titleid="تعيين";

var gui_txt_group_path_source="المصدر:";
var gui_txt_group_path_destination="الموقع: ";

// XMB Transfer
var gui_txt_syscall_group_xmb_transfer="خيارات نقل XMB ";
var gui_txt_option_xmb_photo="صور";
var gui_txt_option_xmb_music="موسيقى";
var gui_txt_option_xmb_video="فيديو";
var gui_txt_option_xmb_jpg_btn="Press &#x25B3 For JPG";
var gui_txt_option_xmb_mp3_btn="Press &#x25B3 For MP3";
var gui_txt_option_xmb_mp4_btn="Press &#x25B3 For MP4";
var gui_txt_option_xmb_save_msg="&#x2192 File &#x2192 Save Target &#x2192 System Storage";

var gui_txt_group_payload_type="Payload Type ";
var gui_txt_group_payload_type_help="Replace default payloads with your own files, using the same names, and place in TEMPLATE/payloads/ folder under HTML source";

// String Search
var gui_txt_group_string_search="بحث:";
var gui_txt_option_search_size="الحجم";
var gui_txt_option_search_base="القاعدة";
var gui_txt_option_search_stack="كومة ستاك";
var gui_txt_option_search_range="نطاق";
var gui_txt_option_search_loops="حلقات لوبز";

var gui_chk_search_verify_jumps="التحقق من القفزات";
var gui_chk_search_verify_stackframe="كومة الإيطارات ستاك فريم:";
var gui_chk_search_debug_output="تصحيح ديبق:";

var gui_txt_search_found_offsets="Found Offsets: base_fp: 0x0 | stack_frame_addr: 0x0 | jump_2_addr: 0x0 | jump_1_addr: 0x0";

// Buttons
var gui_txt_option_init_rop_btn="تهيئة سلسلة ROP";
var gui_txt_option_exec_rop_btn="تنفيذ السلسلة";
var gui_txt_option_reload_page_btn="تحديث الصفحة";
var gui_txt_option_reset_btn="إعادة ضبط الاعدادات";
var gui_txt_option_load_settings_btn="تحميل الإعدادت";
var gui_txt_option_save_settings_btn="حفظ الإعدادات";
var gui_txt_option_debug_show_var_btn="اظهار جميع المغيرات";