const translations = {
    en: {
        //index
        loading: "Loading...",
        home: "Home",
        led_settings: "LED Settings",
        songs: "Songs",
        sequences: "Sequences",
        ports_settings: "Ports Settings",
        led_animations: "LED Animations",
        wifi: "Wi-Fi",
        switch_ports: "Switch Ports",
        view_on_github: "View on GitHub",

        //ledcolor
        led_color: "LED Color",
        multicolor: "Multicolor",
        rainbow_colors: "Rainbow Colors",
        speed: "Speed",
        gradient: "Gradient",
        scale_coloring: "Scale Coloring",
        velocity_rainbow: "Velocity Rainbow",

        offset:  "Offset",
        scale: "Scale",
        timeshift: "Timeshift",
        scale_percent: "Scale %",
        curve_percent: "Curve %",
        slow_color: "Slow Color",
        fast_color: "Fast Color",
        max_notes: "Max Notes",
        period_in_seconds: "Period in seconds",
        start: "Start",
        end: "End",
        color_for_in_scale: "Color for in scale",
        color_for_not_in_scale: "Color for not in scale",
        scale_key: "Scale key",

        //lightmode
        fading: "Fading",
        velocity: "Velocity",
        instant: "Instant",
        very_fast: "Very Fast",
        fast: "Fast",
        medium: "Medium",
        slow: "Slow",
        very_slow: "Very Slow",

        //ledsettings
        backlight: "Backlight",
        sides_colors:  "Sides Colors",
        off: "Off",
        same_as_led_color: "Same as LED Color",
        rgb: "RGB",
        adjustments: "Adjustments",
        skipped_notes: "Skipped Notes",
        finger_based_ignore: "Finger Based: ignore notes with information about which hand to play",
        normal_ignore_all_other: "Normal:ignore all other notes",
        none: "None",
        finger_based: "Finger Based",
        reverse: "Reverse",
        inverted: "Inverted",
        shift: "Shift",
        led_count: "Led Count",
        leds_per_meter: "Leds per meter",
        led_note_offsets: "LED Note Offsets",

        //songs
        status: "Status",
        start_recording: "Start Recording",
        starting: "starting",
        stop_and_save: "Stop and Save",
        cancel_recording: "Cancel Recording",
        canceling:  "canceling",
        upload_songs: "Upload Songs",
        drag_and_drop_midi: "Drag and drop midi file(s) here",
        or_click_to_choose: "or click to choose file(s) to upload",
        play_on_piano: "Play on piano",
        stop: "Stop",
        stop_learning: "Stop learning",
        loop: "Loop",
        practice: "Practice",
        melody: "Melody",
        rhytm: "Rhytm",
        listen:  "Listen",
        tempo:  "Tempo",
        hands: "Hands",
        both: "Both",
        right: "Right",
        left: "Left",
        mute_hands: "Mute Hands",
        wrong_notes: "Wrong Notes",
        disabled: "Disabled",
        enabled: "Enabled",
        future_notes: "Future Notes",
        start_point: "Start Point",
        set_the_current_track_time: "Set the current track time as the loop start",
        end_point: "End Point",
        set_the_current_track_time_as_the_loop_end: "Set the current track time as the loop end",
        left_hand_color: "Left hand color",
        right_hand_color: "Right hand color",
        songs_list: "Songs List",
        getting_songs_list: "Getting songs list",

        //sheetmusic
        load_custom_sheet: "Load custom sheet",
        offset_ms: "Offset (ms)",
        sheet_tip_line_1: "If the automatic conversion does not suit your expectations, you can load your own musical notation.",
        sheet_tip_line_2: "The highlighted part of the music notation is only an approximate indicator. Use the offset tool to improve synchronization.",
        sheet_tip_line_3: "For the best result do the following:",
        sheet_tip_line_4: "1. Convert your music notation to a midi file using Musescore or similar program, name it the same as the midi file you want to load. (E.g. my_music.mid and my_music.xml)",
        sheet_tip_line_5: "2. Upload the midi file and the music notation file.",

        //songslist
        name: "Name",
        date: "Date",
        action: "Action",
        songs_per_page: "Songs per page",
        total_songs: "Total songs",

        //sequences
        sequence: "Sequence",
        active_sequence: "Active Sequence",
        color: "Color",
        next_step: "Next Step",
        press_spacebar:  "Press spacebar",
        add: "Add",
        remove: "Remove",
        step: "Step",
        activation_method:  "Activation Method",
        button_press: "Button Press",
        sustain_pedal: "Sustain Pedal",
        portamento_pedal:  "Portamento Pedal",
        sostuneto_pedal: "Sostuneto Pedal",
        soft_pedal: "Soft Pedal",
        next_step_value:  "Next Step Value",
        next_step_tip_line_1: "This value decides if next step is activated when you press or release the pedal.",
        next_step_tip_line_2: "For example if you want to change settings after fully pressing Sostenuto pedal you should set it to 126",
        next_step_tip_line_3: "(127 is the maximum value when pedal is fully pressed).",
        next_step_tip_lime_4: "When you want to change settings when fully releasing pedal set it to -1.",
        sequence_name: "Sequence name",
        save_current_settings_to_step: "Save current settings to step",

        //ports
        for_lighting_leds: "For lighting LEDs with your keyboard, set your piano port as an active input.",
        set_your_synthesia: "Set your Synthesia's port for learning mode.",
        active: "Active",
        switch: "Switch",
        secondary: "Secondary",
        used_for_sound: "Used for sound when playing a midi file.",
        list_of_ports: "List of ports and connections",
        disconnect_ports: "Disconnect ports",
        restart_rtp: "Restart RTP MIDI service",
        midi_events: "MIDI events",
        show_midi_events: "Show midi events (might degrade performance)",

        //network
        connected_wifi: "Connected Wi-Fi",
        disconnect_wifi_and_create_hotspot: "Disconnect Wi-Fi and create Hotspot",
        disconnecting_warning_line_1: "Disconnecting from Wi-Fi will start the process of creating a Hotspot. This might take a moment.",
        disconnecting_warning_line_2: "You'll need to connect to the newly created Hotspot to access the web interface again.",
        wifi_list: "Wi-Fi List",

        //ledanimations


        //homepage
        advanced_mode: "Advanced mode",
        system_cpu_usage: "System CPU usage",
        ram_usage: "Ram usage",
        disk_usage: "Disk Usage",
        bandwidth_usage: "Bandwidth Usage",
        process_cpu_usage: "Process CPU usage",
        metronome: "Metronome",
        beats_per_measure: "Beats Per Measure",
        volume: "Volume",
        color_mode: "Color Mode",
        single: "Single",
        light_mode: "Light Mode",
        normal: "Normal",
        brightness: "Brightness",
        backlight_brightness: "Backlight Brightness",
        input_port: "Input Port",
        playback_port: "Playback Port",
        cover_state: "Cover State",
        screen: "Screen",
        reset_settings_to_default: "Reset settings to default",
        confirm: "Confirm",
        restart_rpi: "Restart RPi",
        restart_visualizer: "Restart Visualizer",
        power_off: "Power Off",
        update_visualizer: "Update Visualizer",
        connect_ports: "Connect Ports",
        clean_led_strip: "Clean LED Strip",
        logs: "Logs",
        show_last: "Show last",
        lines: "lines",


    },
    pl: {
        //index
        loading: "Ładowanie...",
        home: "Strona główna",
        led_settings: "Ustawienia LED",
        songs: "Nuty",
        sequences: "Sekwencje",
        ports_settings: "Ustawienia Portów",
        led_animations: "Animacje LED",
        wifi: "Wi-Fi",
        switch_ports: "Zamień Porty",
        view_on_github: "Sprawdź GitHub",

        offset: "Przesunięcie",
        scale: "Skala",
        timeshift: "Przesunięcie czasu",
        scale_percent: "Skala %",
        curve_percent: "Krzywa %",
        slow_color: "Wolno - kolor",
        fast_color: "Szybko - kolor",
        max_notes: "Maksymalna liczba nut",
        period_in_seconds: "Okres w sekundach",
        start: "Początek",
        end: "Koniec",
        color_for_in_scale: "Kolor dla nut w skali",
        color_for_not_in_scale: "Kolor dla nut poza skalą",
        scale_key: "Klucz skali",


        //ledcolor
        led_color: "Kolor LED",
        multicolor: "Wiele kolorów",
        rainbow_colors: "Tęcza",
        speed: "Prędkość",
        gradient: "Gradient",
        scale_coloring: "Skala kolorów",
        velocity_rainbow: "Tęcza-Prędkość",

        //lightmode
        fading: "Zanikanie",
        velocity: "Szybkość nacisku",
        instant: "Natychmiast",
        very_fast: "Bardzo szybko",
        fast: "Szybko",
        medium: "Średnio",
        slow: "Wolno",
        very_slow: "Bardzo wolno",


        //ledsettings
        backlight: "Podświetlenie",
        sides_colors:  "Sąsiadujące diody",
        off: "Wyłącz",
        same_as_led_color: "Takie same jak kolor LED",
        rgb: "RGB",
        adjustments: "Poprawki",
        skipped_notes: "Pominięte nuty",
        finger_based_ignore: "Finger Based: ignoruj nuty z informacją którą ręką należy grać",
        normal_ignore_all_other: "Normal: ignoruj wszystkie inne nuty",
        none: "Brak",
        finger_based: "Finger Based",
        reverse: "Kierunek",
        inverted: "Odwrócone",
        shift: "Przesunięcie",
        led_count: "Liczba diód",
        leds_per_meter: "Ledów na metr",
        led_note_offsets: "Przesunięcie nut",


        //songs
        status: "Status",
        start_recording: "Rozpocznij nagrywanie",
        stop_recording: "Zatrzymaj nagrywanie",
        starting: "Rozpoczynanie",
        stop_and_save: "Zatrzymaj i zapisz",
        cancel_recording: "Anuluj nagrywanie",
        canceling: "Anulowanie",
        upload_songs: "Prześlij Nuty",
        drag_and_drop_midi: "Przeciągnij i upuść MIDI",
        or_click_to_choose: "Lub kliknij aby wybrać",
        play_on_piano: "Odtwórz na pianie",
        stop: "Zatrzymaj",
        stop_learning: "Zatrzymaj naukę",
        loop: "Pętla",
        practice: "Ćwiczenia",
        melody:  "Melodia",
        rhytm: "Rytm",
        listen: "Słuchaj",
        tempo:  "Tempo",
        hands: "Ręce",
        both: "Obie",
        right: "Prawa",
        left: "Lewa",
        mute_hands: "Wycisz ręce",
        wrong_notes: "Niepoprawne nuty",
        disabled: "Wyłączone",
        enabled: "Włączone",
        future_notes: "Przyszłe nuty",
        start_point: "Początek",
        set_the_current_track_time: "Ustaw aktualny czas jako początek",
        end_point: "Koniec",
        set_the_current_track_time_as_the_loop_end: "Ustaw aktualny czas jako koniec",
        left_hand_color: "Kolor lewej ręki",
        right_hand_color: "Kolor prawej ręki",
        songs_list: "Lista Nut",
        getting_songs_list: "Ładowanie listy nut",

        //sheetmusic
        load_custom_sheet: "Wczytaj własny zapis nutowy",
        offset_ms: "Przesunięcie (ms)",
        sheet_tip_line_1: "Jeśli automatyczna konwersja nie spełnia oczekiwań możesz wczytać własny zapis nutowy",
        sheet_tip_line_2: "Podświetlona część zapisu nutowego jest tylko szacunkową wskazówką. Użyj narzędzia do zmiany przesunięcia by poprawić synchronizację",
        sheet_tip_line_3: "W celu osiągnięcia najlepszych efektów wykonaj następujące kroki:",
        sheet_tip_line_4: "1. Przekonwertuj zapis nutowy na plik MIDI używając MuseScore lub podobnego programu. Nazwij oba pliki tak samo",
        sheet_tip_line_5: "2. Wczytaj plik MIDI oraz zapis nutowy",

        //songslist
        name: "Tytuł",
        date: "Data",
        action: "Akcja",
        songs_per_page: "Nut na stronę",
        total_songs: "Łącznie nut: ",

        //sequences
        sequence: "Sekwencja",
        active_sequence: "Aktywna sekwencja",
        color: "Kolor",
        next_step: "Następny krok",
        press_spacebar:  "Wciśnij spację",
        add: "Dodaj",
        remove: "Usuń",
        step: "Krok",
        activation_method:  "Metoda aktywacji",
        button_press: "Wciśnięcie przycisku",
        sustain_pedal: "Pedał Sustain",
        portamento_pedal:  "Pedał Portamento",
        sostuneto_pedal: "Pedał Sostuneto",
        soft_pedal: "Pedał Soft",
        next_step_value:  "Wartość następnego kroku",
        next_step_tip_line_1: "Wartość następnego kroku odpowiada za to czy następny krok aktywuje się przy wciśnięciu lub puszczeniu pedała.",
        next_step_tip_line_2: "Dla przykładu: jeśli chcesz zmienić ustawienia po pełnym wciśnięciu prawego pedała ustaw wartość następnego kroku na 126",
        next_step_tip_line_3: "(127 to maksymalna wartość przy wciśniętym pedale)",
        next_step_tip_lime_4: "Jeśli chcesz zmienić ustawienia po puszczeniu prawego pedała ustaw wartość następnego kroku na -1",
        sequence_name: "Nazwa sekwencji",
        save_current_settings_to_step: "Zapisz ustawienia aktualnego kroku",

        //ports
        for_lighting_leds: "By podświetla klawisze grając ustaw swoje pianino jako aktywny port",
        set_your_synthesia: "Ustaw port Synthesii ucząc się grać",
        active: "Aktywny",
        switch: "Zamień",
        secondary: "Zastępczy port",
        used_for_sound: "Używany przy odtwarzaniu MIDI",
        list_of_ports: "Lista portów i połączeń",
        disconnect_ports: "Rozłącz porty",
        restart_rtp: "Zrestartuj usługę RTP MIDI",
        midi_events: "Wiadomości MIDI",
        show_midi_events: "Pokaż wiadomości MIDI (może obniżyć wydajność)",

        //network
        connected_wifi: "Połączone Wi-Fi",
        disconnect_wifi_and_create_hotspot: "Rozłącz Wi-Fi i utwórz Hotspot",
        disconnecting_warning_line_1: "Rozłączenie z Wi-Fi rozpocznie proces tworzenia Hotspota. Może to zająć kilka minut",
        disconnecting_warning_line_2: "By uzyskać dostęp do interfejsu, należy najpierw połaczyć się z Hotspotem",
        wifi_list: "Lista dostępnych Wi-Fi",


        //homepage
        advanced_mode: "Tryb zaawansowany",
        system_cpu_usage: "Użycie procesora przez system",
        ram_usage: "Użycie RAM",
        disk_usage: "Użycie dysku",
        bandwidth_usage: "Wykorzystanie sieci",
        process_cpu_usage: "Użycie procesora przez aplikacje",
        metronome: "Metronom",
        beats_per_measure: "Uderzeń na takt",
        volume: "Głośność",
        color_mode: "Tryb koloru",
        single: "Pojendynczy",
        light_mode: "Tryb świecenia",
        normal: "Normalny",
        brightness: "Jasność",
        backlight_brightness: "Jasność podświetlenia",
        input_port: "Port wejścia",
        playback_port: "Port odtwarzania",
        cover_state: "Stan pokrywy",
        screen: "Ekran",
        reset_settings_to_default: "Przywróć ustawienia domyślne",
        confirm: "Potwierdź",
        restart_rpi: "Zrestartuj RPi",
        restart_visualizer: "Zrestartuj Visualizator",
        power_off: "Wyłącz",
        update_visualizer: "Aktualizuj Visualizator",
        connect_ports: "Połącz Porty",
        clean_led_strip: "Wyczyść taśmę LED",
        logs: "Logi",
        show_last: "Pokaż ostatnie",
        lines: "linii",

    }
};