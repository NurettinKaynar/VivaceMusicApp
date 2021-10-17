import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Colors from '../constants/Colors';
const UserLicense = () => {
  return (
    <ScrollView>
      <View style={styles.panel}>
        <Text style={styles.userLicenseHeader}>Kullanıcı Sözleşmesi</Text>
        <Text style={styles.descriptionAltHeader}>1. Veri Sorumlusu</Text>
        <Text style={styles.userLicenseDescription}>
          6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”) uyarınca,
          kişisel verileriniz; veri sorumlusu olarak Vivace Music (Mobil
          Uygulama) tarafından aşağıda açıklanan koşullar kapsamında
          işlenmektedir.
        </Text>
        <Text style={styles.descriptionAltHeader}>
          2. Kişisel Verileri Toplama Yöntemleri ve Hukuki Sebepleri
        </Text>
        <Text style={styles.userLicenseDescription}>
          Mobil uygulamamız, kişisel verileri doğrudan siz kullanıcılarımızdan,
          sizinle aramızdaki sözleşme ilişkisinden, mobil uygulamalarımızdan,
          e-posta, posta, faks, idari ve adli makamlardan gelen tebligatlar ve
          sair iletişim kanalları aracılığıyla işitsel, elektronik veya yazılı
          olarak öğrenilen veriler şeklinde elde etmekte, bu elde edilen kişisel
          veriler, Kanun’da belirtilen kişisel veri işleme şartlarına uygun
          olarak ve sizinle aramızdaki ilişkinin icrası ve faaliyetlerin
          mevzuata uygunluğunun temini amaçları başta olmak üzere aşağıda
          belirtilen amaçlarla sınırlı olarak, sizlerle bir sözleşme ilişkisi
          kurmamız veya bu sözleşmeden kaynaklanan ifa yükümlülüğümüz ile
          doğrudan doğruya ilgili olması kaydıyla, sizlere ait kişisel verilerin
          işlenmesinin gerekli olması, hukuki yükümlülüğümüzü yerine
          getirebilmek için zorunlu olması (örneğin, ses ve fotoğrafların
          kaydedilmesi ve işlenmesi) ve gerekli olduğu durumlarda sizlerden
          aldığımız açık rızanız hukuki sebepleri doğrultusunda işlenmektedir.
        </Text>
        <Text style={styles.descriptionAltHeader}>
          3. Kişisel Verilerin Hangi Amaçla İşleneceği
        </Text>
        <Text style={styles.userLicenseDescription}>
          Kişisel verileriniz, sizlerle sözleşme ilişkisi kurmamız ve bu
          sözleşme sürecinin tüm safhalarını yönetmemiz, uçtan uca pazarlama
          süreçlerini planlamamız ve icra etmemiz, size en uygun uygulamaların
          hazırlanması ve sunulması, bilgi güvenliğini ve hukuki işlem
          güvenliğini sağlamamız ve faaliyetlerin mevzuata uygun yürütülmesini
          sağlamamamız başta olmak üzere, iletişim faaliyetlerinin yürütülmesi,
          verilerinizin doğruluğunun sağlanması, istatistiksel değerlendirmeler
          ve pazar araştırmaları yapılması, müşteri ilişkileri yönetimi
          süreçlerinin yürütülmesi, müşteri memnuniyetine yönelik aktivitelerin
          yürütülmesi, ürün/hizmetlerin pazarlama süreçlerinin yürütülmesi, risk
          yönetimi süreçlerinin yürütülmesi ile organizasyon ve etkinlik
          yönetimi amaçlarıyla işlenecektir.
        </Text>
        <Text style={styles.descriptionAltHeader}>
          4. İşlenen Kişisel Verilerin Aktarılması
        </Text>
        <Text style={styles.userLicenseDescription}>
          Mobil uygulamamız, kişisel verilerinizi “bilme gereği” ve “kullanma
          gereği” ilkelerine uygun olarak, gerekli veri minimizasyonunu
          sağlayarak ve gerekli teknik ve idari güvenlik tedbirlerini alarak
          işlemeye özen göstermektedir. İş faaliyetlerinin yürütülmesi veya
          denetimi, iş sürekliliğinin sağlanması, dijital altyapıların
          işletilmesi farklı paydaşlarla sürekli veri akışını zaruri kıldığı
          için işlediğimiz kişisel verileri belirli amaçlarla üçüncü kişilere
          aktarmak durumundayız. Ayrıca, sözleşmesel ve kanuni
          yükümlülüklerimizi tam ve gereği gibi yerine getirebilmemiz için
          kişisel verilerinizin doğru ve güncel olması çok önemlidir. Kişisel
          verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi
          doğrultusunda ve bu amaçların yerine getirilmesi ile sınırlı olarak;
          iletilerin yönetilmesi için ileti yönetim sistemi (İYS) kayıt
          bağlamında Ticaret Bakanlığı ve yetkilendirdiği şirketle ve ileti
          gönderimi için yetkili ticari ileti altyapı sağlayıcıyla, finansal
          süreçlerin yönetimi, risklerin tespiti, değerlendirilmesi,
          dolandırıcılıkların önlenmesi için ilgili iş ortaklarımız,
          danışmanlarımız ve hizmet sağlayıcılarımızla, hukuki yükümlülüklerin
          yerine getirilmesi kapsamında ilgili avukatlar, denetçiler ve
          uzmanlarla, düzenleyici ve denetleyici kurumlar ile mahkeme ve icra
          müdürlükleri gibi yetkili makamlarla işbu amaçlarla sınırlı olarak
          paylaşılabilecektir.
        </Text>
        <Text style={styles.descriptionAltHeader}>
          5. İlgili Kişinin Hakları
        </Text>
        <Text style={styles.userLicenseDescription}>
          Kişisel verisi işlenen kişi olarak, Kanunun ilgili kişinin haklarını
          düzenleyen 11. maddesi kapsamındaki taleplerinizi (kişisel veri
          işlemeyi öğrenme, işlemeyle ilgili bilgi talep etme, işlemenin amaca
          uygunluğunu öğrenme, aktarım yapılan kişileri bilme, eksik veya yanlış
          işlemelerin düzeltilmesini isteme, silme veya yok edilmesini isteme,
          otomatik tüm işlemlerin üçüncü kişilere bildirilmesini isteme, analize
          itiraz etme, zararın giderilmesini talep etme) Veri Sorumlusuna
          Başvuru Usul ve Esasları Hakkında Tebliğe göre kullanmak için
          vivacemusicapp@gmail.com ile iletişime geçebilirsiniz.
        </Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  panel: {
    flexDirection: 'column',
    marginTop: 30,
    marginLeft: 10,
  },
  userLicenseHeader: {
    color: Colors.backgroundColor,
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  userLicenseDescription: {
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 15,
    marginBottom: 5,
  },
  descriptionAltHeader: {
    fontSize: 20,
    fontFamily: 'Roboto-medium',
    textAlign: 'left',
    marginBottom: 5,
  },
});

export default UserLicense;
